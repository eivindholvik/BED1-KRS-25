// ─────────────────────────────────────────────
// 🌱 REGION 1: Environment and Basic Setup
// ─────────────────────────────────────────────

require('dotenv').config(); // Load variables from .env file

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

// ─────────────────────────────────────────────
// 🧱 REGION 2: Sequelize (Database) Setup
// ─────────────────────────────────────────────

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

// Import the User model
const User = require('./models/User')(sequelize, DataTypes);

// Test endpoint to verify DB connectivity manually
app.get('/test-db', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Connection to DB successful!');
    } catch (err) {
        res.status(500).send('DB connection failed: ' + err.message);
    }
});

// ─────────────────────────────────────────────
// 🔌 REGION 3: Redis Setup and Caching Config
// ─────────────────────────────────────────────

const redis = require('redis');

const client = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379
    }
});

client.connect();

const CACHE_TTL = 60; // Time-to-live for cache in seconds

// ─────────────────────────────────────────────
// 🔁 REGION 4: User Endpoint with Caching
// ─────────────────────────────────────────────

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const start = Date.now(); // Used to measure response time

    try {
        // Check if user data is already cached
        const cached = await client.get(`user:${id}`);

        if (cached) {
            return res.json({
                source: 'cache',
                durationMs: Date.now() - start,
                data: JSON.parse(cached),
            });
        }

        // Not in cache — fetch from DB
        const user = await User.findByPk(id);
        if (!user) return res.status(404).send('Not found');

        // Store in Redis cache for 60 seconds
        await client.set(`user:${id}`, JSON.stringify(user), {
            EX: CACHE_TTL
        });

        res.json({
            source: 'database',
            durationMs: Date.now() - start,
            data: user,
        });
    } catch (err) {
        console.error('Error in /users/:id', err);
        res.status(500).send('Server error');
    }
});

// ─────────────────────────────────────────────
// 🔄 REGION 5: Retry Logic for Waiting on DB
// ─────────────────────────────────────────────

/*
🧠 Why this is needed:

Docker Compose ensures services start in order using `depends_on`,
but it does NOT wait for them to be fully ready.

This function tries to connect to the database, and if it fails,
it waits a bit and tries again. This avoids crashing the app
if the DB is still booting up.
*/

async function waitForDb(retries = 10, delay = 2000) {
    while (retries > 0) {
        try {
            await sequelize.authenticate();
            console.log('✅ DB connection established');
            return;

        } catch (err) {
            console.log(`⏳ Waiting for DB... (${retries} retries left)`);
            retries--;

            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(); // Resume after the delay
                }, delay);
            });
        }
    }

    throw new Error('❌ Could not connect to DB after multiple attempts');
}

// ─────────────────────────────────────────────
// 🚀 REGION 6: Startup (Async IIFE)
// ─────────────────────────────────────────────

/*
This is an IIFE — Immediately Invoked Function Expression.
It lets us run async/await logic at the top level (outside of route handlers).

Here, we:
1. Wait for DB to be ready
2. Sync Sequelize models
3. Insert a test user
4. Start the Express server
*/

(async () => {
    try {
        await waitForDb();

        sequelize.sync({ force: true }).then(async () => {
            await User.create({ name: "Alice", email: "alice@example.com" });
        });

        console.log('✅ Sequelize synced');

        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
        });

    } catch (err) {
        console.error('❌ Startup failed:', err);
    }
})();

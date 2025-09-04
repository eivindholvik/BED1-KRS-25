const mysql = require('mysql2/promise');

const {
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_USER = 'root',
  DB_PASS = '',
} = process.env;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const max = 30;
  for (let i = 1; i <= max; i++) {
    try {
      const conn = await mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASS,
      });
      await conn.ping();
      await conn.end();
      console.log('✅ Database reachable');
      process.exit(0);
    } catch (e) {
      console.log(`⏳ Waiting for DB... (${i}/${max})`);
      await sleep(2000);
    }
  }
  console.error('❌ Could not connect to DB in time.');
  process.exit(1);
})();

const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_NAME = 'todos',
  DB_USER = 'root',
  DB_PASS = '',
  NODE_ENV = 'development',
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: NODE_ENV === 'development' ? console.log : false,
});

const Todo = require('./Todo')(sequelize);

async function initAndSeed() {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  const count = await Todo.count();
  if (count === 0) {
    await Todo.bulkCreate([
      { title: 'Learn Docker', completed: false },
      { title: 'Wire up API', completed: false },
      { title: 'Build EJS frontend', completed: false },
    ]);
    console.log('🌱 Seeded initial todos');
  }
}

module.exports = { sequelize, Todo, initAndSeed };

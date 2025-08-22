const Sequelize = require("sequelize");
const db = {};

connection = {
  dialect: "mysql",
  dialectModel: "mysql2",
  database: "sequelizedatabase",
  username: "sequelizeUser",
  password: "asdf1234",
  host: "localhost"
}

const sequelize = new Sequelize(connection);

db.sequelize = sequelize;
db.users = require("./user.js")(sequelize, Sequelize);
sequelize.sync({ alter: true });
module.exports = db;
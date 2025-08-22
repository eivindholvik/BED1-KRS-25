module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    firstName: Sequelize.DataTypes.STRING,
    lastName: Sequelize.DataTypes.STRING,
  });
  return User
}
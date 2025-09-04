const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Todo = sequelize.define('Todo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    tableName: 'todos',
    timestamps: true
  });
  return Todo;
};

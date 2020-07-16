
module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: DataTypes.STRING,
    time: DataTypes.INTEGER
  });
  Task.associate = function (models) {
    Task.belongsToMany(models.Routine, {
      through: "RoutineTask",
      foreignKey: {
        allowNull: true
      }
    });
  }
  return Task;
};

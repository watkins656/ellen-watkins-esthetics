
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: DataTypes.STRING,
    time: DataTypes.INTEGER
  });
  return Task;
};

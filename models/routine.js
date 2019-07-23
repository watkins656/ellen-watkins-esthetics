
module.exports = function(sequelize, DataTypes) {
  var Routine = sequelize.define("Routine", {
    name: DataTypes.STRING,
  });
  return Routine;
};

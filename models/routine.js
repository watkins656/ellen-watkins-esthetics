
module.exports = function(sequelize, DataTypes) {
  var Routine = sequelize.define("Routine", {
    name: DataTypes.STRING,
  });

  Routine.associate = function(models){
    Routine.hasMany(models.Task,{
      onDelete:"SET NULL"
    })
  }
  return Routine;
};

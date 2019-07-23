
module.exports = function(sequelize, DataTypes) {
  var Log = sequelize.define("Log", {
    user: DataTypes.STRING,
    page: DataTypes.STRING,
    message: DataTypes.STRING,
  });
  return Log;
};

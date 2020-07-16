
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  

  User.associate = function(models) {
    // Associating User with Posts
    User.hasMany(models.Routine, {});
  };

  return User;
};

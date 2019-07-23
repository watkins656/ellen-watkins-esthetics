
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  Task.belongsToMany(User, { through: 'UserTask' });
  User.belongsToMany(Task, { through: 'UserTask' });
  return User;
};

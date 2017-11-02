"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  // User.associate= (models) => {
  User.hasMany(models.Scripture, {
    foreignKey: "scripture_id"
  });
  User.hasMany(models.Journal, {
    foreignKey: "journal_id"
  });
  return User;
};

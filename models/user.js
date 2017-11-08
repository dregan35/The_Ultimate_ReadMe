'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    journal: DataTypes.TEXT

  });
  //   User.associate= (models) => {
  //   User.hasMany(models.Journal, {
    
  //   });
      
    
  // });
  return User;
};
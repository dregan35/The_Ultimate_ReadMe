"use strict";
module.exports = (sequelize, DataTypes) => {
  var Journal = sequelize.define(
    "Journal",
    {
      journal: DataTypes.TEXT,
      username: DataTypes.STRING
    },
    { timestamps: false }
  );

  // Journal.associate = (models) => {
  //   Journal.belongsTo(models.User, {
  //     foreignKey: "username"
  //   });

  // });
  return Journal;
};

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW, ENUM } = app.Sequelize;
  const RoleEnum = ENUM('admin', 'user');
  const Users = app.model.define('Users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    avatar: STRING(255),
    role: RoleEnum,
    username: STRING(30),
    mobile: STRING(11),
    email: STRING(30),
    password: STRING(255),
    lastLogied: {
      type: DATE,
      defaultValue: NOW,
    },
    createdAt: {
      type: DATE,
      defaultValue: NOW,
    },
    updatedAt: {
      type: DATE,
      defaultValue: NOW,
    },
  });

  return Users;
};

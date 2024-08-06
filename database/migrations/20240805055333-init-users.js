'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 使用 queryInterface 创建一个新表
    const RoleEnum = Sequelize.ENUM('admin', 'user');
    await queryInterface.createTable('users', {
      // 表的字段定义
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      avatar: Sequelize.STRING(255),
      role: RoleEnum,
      username: Sequelize.STRING(30),
      mobile: Sequelize.STRING(11),
      email: Sequelize.STRING(30),
      password: Sequelize.STRING(255),
      last_logied: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface) {
    // 使用 queryInterface 删除表
    await queryInterface.dropTable('users');
  }
};

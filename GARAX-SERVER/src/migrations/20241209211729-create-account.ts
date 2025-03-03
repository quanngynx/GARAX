'use strict';

const { REGEX, COMMON } = require('../constants');
const gender = COMMON.USERS.GENDER
const defaultAvatar = COMMON.USERS.AVATAR.DEFAULT_VALUE
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [5, 20],
          is: REGEX.FIELDS.USERNAME
        }
      },
      firstName: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      gender: {
        type: Sequelize.ENUM(gender.MALE, gender.FEMALE, gender.OTHER),
        defaultValue: gender.MALE
      },
      dob: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: Sequelize.STRING,
        validate: {
          is: REGEX.FIELDS.PHONE
        }
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: defaultAvatar
      },
      password: {
        type: Sequelize.STRING
      },
      emptyPassword: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      googleId: {
        type: Sequelize.STRING
      },
      pointerId: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};

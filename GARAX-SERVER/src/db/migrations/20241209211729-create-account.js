'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('accounts', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [5, 20],
        is: /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
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
      type: Sequelize.ENUM('male', 'female', 'other'),
      defaultValue: 'male'
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
        notEmpty: { msg: 'Phone number cannot be empty' },
        is: {
          args: [/^\+?[0-9]{1,3}?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/],
          msg: 'Invalid phone number format. Expected format: +XXX (XXX) XXX-XXXX'
        }
      }
    },
    avatar: {
      type: Sequelize.STRING,
      defaultValue: 'https://drive.google.com/thumbnail?id=1bE9KJ_Mtw5hgCXGSbp4QUKkF7H5-bSMM&sz=w250'
    },
    password: {
      type: Sequelize.STRING
    },
    emptyPassword: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    googleId: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    pointerId: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    roleId: {
      type: Sequelize.INTEGER
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
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('accounts');
}

'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model { }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Please fill in all fields' },
        notEmpty: { msg: 'Please fill in all fields' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Please fill in all fields' },
        notEmpty: { msg: 'Please fill in all fields' }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Please fill in all fields' },
        notEmpty: { msg: 'Please fill in all fields' },
        len: {
          args: 5,
          msg: 'Password must be at least 6 characters'
        }
      }

    }
  }, { sequelize })

  // const User = sequelize.define('User', {
  //   username: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};
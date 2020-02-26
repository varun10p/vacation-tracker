const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hasPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    phonenumber: {
      type: DataTypes.STRING,
      unique: true
    },
    birthdate: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hasPassword,
      beforeUpdate: hasPassword,
      beforeSave: hasPassword
    }
  })

  User.prototype.comparePassword = (password) => {
    return bcrypt.compareAsync(password, this.password)
  }

  User.associate = function (models) {

  }

  return User
}

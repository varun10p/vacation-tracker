module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
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
  })

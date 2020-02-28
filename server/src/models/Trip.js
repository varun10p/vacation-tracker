module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    destination: {
      type: DataTypes.STRING
    }
  })

  Trip.associate = function (models) {

  }
  return Trip
}

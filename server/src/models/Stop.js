module.exports = (sequelize, DataTypes) => {
  const Stop = sequelize.define('Stop', {
    notes: {
      type: DataTypes.TEXT
    }
  })
  return Stop
}

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
      name: {
        type: DataTypes.STRING
      }
    })

    Group.associate = function (models) {
        Group.hasMany(models.User)
    }
    return Group
  }
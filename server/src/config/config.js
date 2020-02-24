module.exports = {
  port: process.env.PORT || 8081,
  db: {
    HOST: 'localhost',
    USERNAME: 'root',
    PASSWORD: 'varunkb24',
    DB: 'vacationtracker',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

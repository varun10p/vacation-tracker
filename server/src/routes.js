const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationValidator = require('./validators/AuthenticationControllerValidator')
const TripsController = require('./validators/TripsController')
module.exports = (app) => {
  app.post('/register',
    AuthenticationValidator.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/trips',
    TripsController.index)
    
  app.get('/files',
    FilesController.index)
}

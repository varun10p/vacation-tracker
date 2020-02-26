const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationValidator = require('./validators/AuthenticationControllerValidator')
module.exports = (app) => {
  app.post('/register',
    AuthenticationValidator.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}

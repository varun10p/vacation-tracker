const Joi = require('@hapi/joi')
module.exports = {
  register (req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      username: Joi.string().alphanum().min(5).max(20).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
      phonenumber: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')),
      birthdate: Joi.string().pattern(new RegExp('^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$')),
      birth_year: Joi.number().integer().min(1900).max(2020)
    })

    const { error } = schema.validate(req.body)
    console.log(error)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: '<br> The password must contain valid characters and must be between 8 and 32 characters in length.'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username'
          })
          break
        case 'phonenumber':
          res.status(400).send({
            error: 'You must provide a valid phonenumber'
          })
          break
        case 'birthdate':
          res.status(400).send({
            error: 'You must provide a valid birthdate in the required format'
          })
          break

        case 'birth_year':
          res.status(400).send({
            error: 'You must provide a valid birthyear'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid information was provided'
          })
      }
    } else {
      next()
    }
  }
}

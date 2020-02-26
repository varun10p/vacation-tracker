const { User } = require('../models')
const jt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSigninUser (user) {
  const ONE_MONTH = 60 * 60 * 24 * 30
  return jt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_MONTH
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Email or Phonenumber is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({
        where: {
          username: username
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was not correct'
        })
      }

      const exisitngPassowrd = await user.comparePassword(password)
      if (!exisitngPassowrd) {
        return res.status(403).send({
          error: 'The password was incorrect'
        })
      }

      const userJSON = user.toJSON()
      res.status(403).send({
        user: userJSON,
        token: jwtSigninUser
      })
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'A login error has occured'
      })
    }
  }
}

const { Trip } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let trips = null
      trips = await Trip.findAll({
        limit: 5
      })

      res.send(trips)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get trips'
      })
    }
  },
  async show (req, res) {
    try {
      const trip = await Trip.findById(req.params.songId)
      res.send(trip)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get trips'
      })
    }
  },
  async post (req, res) {
    try {
      const trip = await Trip.create(req.body)
      res.send(trip)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create trip'
      })
    }
  },
  async put (req, res) {
    try {
      await Trip.update(req.body, {
        where: {
          id: req.params.tripId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to edit trip'
      })
    }
  }
}

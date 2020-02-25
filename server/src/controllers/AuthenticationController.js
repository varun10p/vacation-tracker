module.exports = {
  register (req, res) {
    res.send({
      message: `you have been admitted to the plug walk ${req.body.email}`
    })
  }
}

let checkBody = function (req, res, next) {
    Object.entries(req.body).length > 0 ? res.status(404).send('Do not send a body in get petitions'):null;
    next();
  };
  module.exports = checkBody
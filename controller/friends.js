const Friends = require("../models/friends");
module.exports = {
  getAllFriends: (req, res, next) => {
    Friends.find({})
      .then((friends) => {
        res.send(friends);
      })
      .catch((err) => {
        res.status(400).send({
          error: err.message,
        });
      });
  },

  getFriend: (req, res, next) => {
    const fname = req.params.fname;
    Friends.findOne({ fname })
      .then((friends) => {
        res.send(friends);
      })
      .catch((err) => {
        res.status(400).send({
          error: err.message,
        });
      });
  },

  postFriend: (req, res, next) => {
    const { fname, lname, age, place, email } = req.body;
    const friend = new Friends({
      fname,
      lname,
      age,
      place,
      email,
    });
    Friends.create(friend)
      .then((friend) => {
        res.send(friend);
      })
      .catch((err) => {
        res.status(400).send({
          error: err.message,
        });
      });
  },

  updateFriend: (req, res, next) => {
    Friends.updateOne({ _id: req.params.id }, req.body, { upsert: true })
      .then(function () {
        Friends.findOne({ _id: req.params.id }).then(function (friend) {
          res.send(friend);
        });
      })
      .catch((err) => {
        res.status(400).send({
          error: err.message,
        });
      });
  },
};

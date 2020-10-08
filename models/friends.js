const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  age: {
    type: Number,
  },
  place: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("friends", friendsSchema);

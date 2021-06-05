const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  gmail: {
    type: String,
    unique: true,
    default: null,
  },
  password: {
    type: String,
    unique: false,
  },
  is_active: {
    type: Boolean,
    default: false,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;

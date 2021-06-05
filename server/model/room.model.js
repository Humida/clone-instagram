const mongoose = require("mongoose");
const user = require("./user.model");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, lowercase: true, unique: true },
  topic: String,
  users: [user],
  messages: [message],
  created_at: Date,
  updated_at: { type: Date, default: Date.now },
});

const room = mongoose.model("room", roomSChema);

module.exports = room;

const mongoose = require("mongoose");
const room = require("../model/room.model").schema;
const user = require("../model/user.model").schema;
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: [user],
  message_line: String,
  created_at: { type: Date, default: Date.now },
});
const message = mongoose.model("message", messageSchema);
module.exports = message;

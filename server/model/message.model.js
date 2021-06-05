const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  room: room,
  user: user,
  message_line: String,
  created_at: { type: Date, default: Date.now },
});

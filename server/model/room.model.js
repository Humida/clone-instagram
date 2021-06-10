const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = require("../model/message.model").schema;
const user = require("../model/user.model").schema;

const roomSchema = new Schema({
  id: { type: String },
  name: { type: String, lowercase: true, unique: true, default: null },
  topic: String,
  user: [user],
  messages: [message],
  created_at: Date,
  updated_at: { type: Date, default: Date.now },
});

const room = mongoose.model("room", roomSchema);

module.exports = room;

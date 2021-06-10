const roomModel = require("../model/room.model");

module.exports = {
  joinRoomChat: async function (req, res, next) {
    res.send(req.body);
  },
};

const express = require("express");
const router = express.Router();
const roomController = require("../controller/room.controller");

// router post
router.post("/", roomController.joinRoomChat);
module.exports = router;

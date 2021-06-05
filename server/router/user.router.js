const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// router post request
router.post("/register", userController.register);
router.post("/login", userController.login);
// router get request
// router put request

// router delete request

module.exports = router;

const http = require("http");
const socketio = require("socket.io");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// control socket
const handleSocket = require("./socket/handelSocket");

// server
const httpServer = http.createServer(app);
const io = socketio(httpServer);

// router
const userRouter = require("./router/user.router");
const roomRouter = require("./router/room.router");
// cofig option cors

// middleware
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect mongoDB
const db = require("./config/db");
db.connect();

// router
app.use("/user", userRouter);
app.use("/room", roomRouter);

// soket connection

io.on("connection", handleSocket);

const PORT = 4000 || process.env.PORT;
httpServer.listen(PORT, () => {
  console.log(`app is litening on ${PORT}`);
});

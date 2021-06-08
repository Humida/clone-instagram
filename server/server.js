const mongoose = require("mongoose");
const express = require("express");
const app = express();
// router
const userRouter = require("./router/user.router");
// cofig option cors
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// middleware
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect mongoDB
const db = require("./config/db");
db.connect();

// router

app.use("/user", userRouter);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is litening on ${PORT}`);
});

console.log();

console.log("'String'");

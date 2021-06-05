const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect to mongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { connect };

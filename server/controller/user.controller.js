// model database
const usersModel = require("../model/user.model");

module.exports = {
  register: async function (req, res, next) {
    try {
      const { gmail, username } = req.body;
      console.log(gmail, username);
      let checkEmail = await usersModel.findOne({ gmail: gmail });
      let checkUsername = await usersModel.findOne({ username: username });
      if (checkEmail == null && checkUsername == null) {
        let user = new usersModel(req.body);
        user.save();
        res.send("success");
      } else if (checkEmail == null) {
        res.send("username is exist");
      } else if (checkUsername == null) {
        res.send("email is exist");
      } else {
        res.send("account is exist");
      }
    } catch (error) {
      console.log(error);
    }
  },
  login: async function (req, res, next) {
    const dataLogin = req.body;

    let logEmail = {
      gmail: dataLogin.option,
      password: dataLogin.password,
    };

    let logUsername = {
      username: dataLogin.option,
      password: dataLogin.password,
    };
    let findUserWithGmail = await usersModel.findOne(logEmail);
    let findUserWithUsername = await usersModel.findOne(logUsername);

    if (findUserWithGmail !== null || findUserWithUsername !== null) {
      res.send("requeset eccept");
    } else {
      res.send("request denied");
    }
  },
};

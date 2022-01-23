const User = require("../models/user.model");

function getSignUp(req, res) {
  res.render("customer/auth/signup");
}

async function signup(req, res) {
  const userInput = { ...req.body };
  const user = new User(
    userInput.email,
    userInput.password,
    userInput.fullname,
    userInput.street,
    userInput.postal,
    userInput.city
  );
  await user.signup();
  res.redirect("/login");
}

function getLogin(req, res) {
  res.render("customer/auth/login");
}

module.exports = {
  getSignUp: getSignUp,
  getLogin: getLogin,
  signup: signup,
};

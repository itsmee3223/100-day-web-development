const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredPassword ||
    !enteredConfirmEmail ||
    enteredPassword.trim() < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    console.log("Format data not valid");
    return res.redirect("/signup");
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    console.log("User already exist please login or create antoher user");
    return res.redirect("/signup");
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
    email: enteredEmail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    console.log("could not login");
    return res.redirect("/login");
  }

  const passwordAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password
  );

  if (!passwordAreEqual) {
    console.log("Password wrong!");
    return res.redirect("/login");
  }
  console.log("User is authenticated!");
  res.redirect("/admin");
});

router.get("/admin", function (req, res) {
  res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;

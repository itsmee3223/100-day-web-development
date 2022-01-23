const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router()

// Router for the browser
// route for signup page
router.get('/signup', authController.getSignUp)
// router for login page
router.get('/signup', authController.getLogin)


module.exports = router
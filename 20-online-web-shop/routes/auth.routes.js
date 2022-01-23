const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router()

// Router for the browser
// route for signup page
router.get('/signup', authController.getSignUp)
router.post('/signup', authController.signup)
// router for login page
router.get('/login', authController.getLogin)


module.exports = router
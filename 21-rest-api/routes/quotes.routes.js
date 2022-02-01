const express = require("express");

const router = express.Router();

const quotesController = require("../controller/quotes.controller");

router.get("/", quotesController.getRandomQuotes);

module.exports = router;

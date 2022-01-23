// node modules
const csrf = require("csurf");
const express = require("express");
const path = require("path");
const database = require("./data/database");
const expressSession = require("express-session");

// middlewares
const addCsrfToken = require("./middlewares/csrf-token");

// routes
const authRoutes = require("./routes/auth.routes");
const createSessionConfig = require("./config/session");

// express use module
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// config session
app.use(expressSession(createSessionConfig()));
// csrf token for defending csrf attack
app.use(csrf());

// middleware
app.use(addCsrfToken);

// routes handler
app.use(authRoutes);

database
  .connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });

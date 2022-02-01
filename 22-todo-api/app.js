var express = require("express");

const database = require("./data/database");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use("/", indexRouter);
app.use("/users", usersRouter);

database
  .initDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (err) {
    console.log(`Cannot connect ${err}`);
  });

module.exports = app;

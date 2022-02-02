var express = require("express");

const database = require("./data/database");

var todosRoute = require("./routes/todos.routes");
var usersRouter = require("./routes/users");

var app = express();

app.use(express.json());

app.use("/todos", todosRoute);
app.use("/users", usersRouter);


app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

database
  .initDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (err) {
    console.log(`Cannot connect ${err}`);
  });

module.exports = app;

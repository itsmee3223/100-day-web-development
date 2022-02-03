var express = require("express");

const database = require("./data/database");
const enableCORS = require('./middlewares/cors');

var todosRoute = require("./routes/todos.routes");
var app = express();

app.use(enableCORS)
app.use(express.json());

app.use("/todos", todosRoute);


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

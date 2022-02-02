var express = require("express");
var router = express.Router();

const todoConroller = require("../controllers/todos.controller");

router.get("/", todoConroller.getAllTodos);
router.post("/", todoConroller.addTodo);
router.patch("/:id", todoConroller.updateTodo);
router.delete("/:id", todoConroller.deleteTodo);

module.exports = router;

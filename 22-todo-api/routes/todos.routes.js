var express = require('express');
var router = express.Router();

const todoConroller = require('../controllers/todos.controller');

router.get('/', todoConroller.getAllTodos);
router.post('/', todoConroller.addTodo);

module.exports = router;

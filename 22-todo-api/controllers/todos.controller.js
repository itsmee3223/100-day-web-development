const Todo = require("../models/todo.model");

async function getAllTodos(req, res, next) {
  let todos;

  try {
    todos = await Todo.getTodos();
  } catch (error) {
    return next(error);
  }
  res.json({
    todos: todos,
  });
}

async function addTodo(req, res, next) {
  const todoText = req.body.text;

  let insertedId;
  const todo = new Todo(todoText);
  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  } catch (error) {
    return next(error);
  }

  todo.id = insertedId.toString();

  res.status().json({
    message: "Added to do success",
    createdTodo: todo,
  });
}

async function updateTodo() {}

async function deleteTodo() {}

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};

const mongodb = require("mongodb");

const db = require("../data/database");

class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  static async getTodos() {
    const todoLists = await db.getDb().collection("todos").find().toArray();

    return todoLists.map(function (todo) {
      return new Todo(todo.text, todo._id);
    });
  }

  save() {
    if (this.id) {
      const todoId = new mongodb.ObjectId(this.id);
      return db
        .getDb()
        .collection("todos")
        .updateOne({ _id: todoId }, { $set: { text: this.text } });
    }
    return db.getDb().collection("todos").insertOne({ text: this.text });
  }

  delete() {
    if (!this.id) {
      throw new Error("There is no id");
    }
    const todoId = new mongodb.ObjectId(this.id);
    return db.getDb().collection("todos").deleteOne({ _id: todoId });
  }
}

module.exports = Todo;

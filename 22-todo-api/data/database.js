const mongodb = require("mongodb");

let databse;
async function initDatabase() {
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  databse = client.db("todo");
}

function getDb() {
  if (!databse) {
    throw new Error("Database not connected!!");
  }
  return databse;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};

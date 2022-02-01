const mongodb = require('mongodb');

let databse

async function initDatabes() {
  const mongoclient = await mongodb.MongoClient.connect('mongodb://localhost:27017')
  databse = mongoclient.db('first-api')
}

function getDb(){
  if(!databse){
    throw new Error('Database not connected')
  }

  return databse
}

module.exports = {
  initDatabes: initDatabes,
  getDb: getDb
}
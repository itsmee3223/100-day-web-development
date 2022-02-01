const express = require('express');
const app = express()

const database = require('./data/database');

const quotesRoute = require('./routes/quotes.routes');

app.use('/quote', quotesRoute)

app.use(function(error, req, res, next){
  res.status(500).json({
    message: 'Something went wrong'
  })
})

database.initDatabes().then(function (){
  app.listen(3000)
}).catch(function (err) {
  console.log(`${err} cannot connecting to the database`)
})
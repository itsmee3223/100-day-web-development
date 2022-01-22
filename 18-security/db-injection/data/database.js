const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: '',
  multipleStatements: false // default set as false it should be false for just executring one query only
})

module.exports = pool;
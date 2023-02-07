const mysql = require('mysql2/promise');
const config = require('./config');

console.log('DB_HOST asdsad', config);

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT
});

module.exports = pool
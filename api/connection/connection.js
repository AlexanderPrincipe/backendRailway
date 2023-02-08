const mysql = require("mysql2");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require("../config/config");

const mysqlConnection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT
});

mysqlConnection.connect((err) => {
  if (err) {
		console.log('error', err);
  } else {
		console.log('DB CORRECTAMENTE CONECTADA');
	}
});

module.exports = mysqlConnection;

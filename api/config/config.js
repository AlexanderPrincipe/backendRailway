const { Console } = require("console");

const config = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'rrlalh25',
  DB_NAME: process.env.DB_NAME || 'lavanderia',
  DB_PORT: process.env.DB_PORT || 3306
}

console.log('PORTTT??', config)

module.exports = config;
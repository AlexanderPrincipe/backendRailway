const express = require('express');
const config = require('./config');
const PORT = require('./config');
const pool = require('./database');
const app = express();

app.get("/clientes", async (req, res, next) => {
  try {
    let clientes = await pool.query('SELECT * FROM CLIENTE');
    res.send(clientes[0]);
    res.json(clientes[0]);
  } catch (err) {
    next(err);
  }
})

app.get("/createCliente", async (req, res) => {
  try {
    let result = await pool.query('INSERT INTO CLIENTE(nombre) VALUES ("Cliente3")');
    res.json(result);
  } catch (err) {
    next(err);
  }
})

app.listen(config.PORT);
console.log('Server on port', config.PORT);
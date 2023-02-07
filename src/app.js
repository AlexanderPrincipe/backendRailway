const express = require('express');
const config = require('./config');
const PORT = require('./config');
const pool = require('./database');
const app = express();

app.get("/", async (req, res, next) => {
  try {
    console.log('RUTA BASE!');
    let clientes = await pool.query('SELECT * FROM Cliente');
    console.log('TRAER CLIENTES!', clientes);
    res.send(clientes[0]);
    res.json(clientes[0]);
    res.send('hola mundo desde railway');
  } catch (err) {
    next(err);
  }
})

app.get("/clientes", async (req, res, next) => {
  try {
    let clientes = await pool.query('SELECT * FROM CLIENTE');
    console.log('TRAER CLIENTES!', clientes);
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
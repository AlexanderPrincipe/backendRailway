const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');


router.get('/users', (req,res)=>{
  mysqlConnection.query('select * from user', (err,rows,fields) => {
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  })
});

router.get('/clientes', (req,res)=>{
  console.log('PROBANDO CLIENTES');
  mysqlConnection.query('select * from cliente', (err,rows,fields) => {
    if(!err){
      res.json(rows);
      console.log('ROWS', rows);
    }else{
      console.log(err);
    }
  })
});

router.post('/add', (req,res)=>{
  const nombre = req.body;
  console.log('add CLIENTES', req.body);
  mysqlConnection.query('INSERT INTO Cliente (nombre) values(?)',
  [nombre],
   (err,rows,fields) => {
    if(!err){
      res.json(rows);
      console.log('ROWS', rows);
    }else{
      console.log(err);
    }
  })
});

router.post('/login', (req,res) => {
  const { userName, pass } = req.body;
  console.log('REQ BODY', req.body);
  mysqlConnection.query('select userName,roleId from user where username=? and pass=?',
  [userName,pass],
  (err,rows,fields) => {
    if(!err){
      if(rows.length >0){
        let data = JSON.stringify(rows[0]);
        const token = jwt.sign(data, 'stil');
        res.json({token});
      }else{
        res.json('Usuario o clave incorrectos!!!');
      }
      
    }else{
      console.log(err);
    }
  }
  )
})

router.post('/test',verifyToken, (req,res) => {
  res.json('Informacion secreta');
})

function verifyToken(req,res, next){
  if(!req.headers.authorization) return res.status(401).json('No autorizado');

  const token = req.headers.authorization.substr(7);
  if(token!==''){
    const content = jwt.verify(token,'stil');
    req.data = content;
    next();
  }else{
    res.status(401).json('Token vacio');
  }

}


module.exports = router;
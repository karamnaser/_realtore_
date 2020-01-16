var express = require('express');
var router = express.Router();

const connector = require('../api/configeration');
const crypto=require('crypto');
let i=10000;
let len=64;
let digest='sha512';
let salt='realtore';

/* GET users listing. */


router.post('/', function(req, res, next) {
  req.body.password= crypto.pbkdf2(req.body.password,salt,i,len,digest,(error,key)=>{
    if(error) throw error;
    connector.query('update users set password = ? and email= ?'
    ,[key.toString('hex'),req.body.email],
    (error,result,field)=>{
        if(error) throw error;
        res.send("sucssefully updtaed");
        res.end();
    })
  })
 
});

module.exports = router;
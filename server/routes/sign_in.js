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
  console.log(req.body)
  req.body.password= crypto.pbkdf2(req.body.password,salt,i,len,digest,(error,key)=>{
    if(error) throw error;
    connector.query(`insert into users(role_id,first_name,last_name,password,email) 
    values(?,?,?,?,?)`
    ,[2,req.body.name,req.body.lastname,key.toString('hex'),req.body.email],
    (error,result,field)=>{
        if(error) throw error;
        res.status(200).json({msg:"sucssefully updtaed"});
    })
  })
 
});

module.exports = router;
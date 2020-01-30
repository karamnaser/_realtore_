var express = require('express');
var router = express.Router();
const crypto=require('crypto');
const { checkuserinfo } = require('../middlewares/auth');
const connector = require('../api/configeration');
const forgotPasswordApi = require('../api/forgotpassword');
let i=10000;
let len=64;
let digest='sha512';
let salt='realtore';

function generateToken() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

/* Post users listing. */

router.post('/',function (req, res, next) {
  let token=generateToken();
  forgotPasswordApi.sendMail(connector, token, res, req);
});

router.post('/restorepassword',checkuserinfo,(req,res,next)=>{
  req.body.password= crypto.pbkdf2(req.body.password,salt,i,len,digest,(error,key)=>{
    if(error) throw error;
    connector.query(`Update users set password=? where email=?` 
    ,[key.toString('hex'),req.body.email],
    (error,result,field)=>{
        if(error) throw error;
        res.status(200).json({msg:"sucssefully updtaed"});
    })
  })
})

module.exports = router;
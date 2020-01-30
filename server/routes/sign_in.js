var express = require('express');
var router = express.Router();

const {signIn} = require('../api/signIn');
/* GET users listing. */


router.post('/',(req,res,next)=>{
  if(req.body.email=="" || req.body.password==""){
    res.status(500).json({msg: 'Cant add new user'})
  }
  else{
    next();
  }
},function(req, res, next) {
    signIn(req.body.name, req.body.lastname, req.body.email, req.body.password)
    .then(response=>res.status(201).json({msg:"sucssefully created", id: userId}))
    .catch(err=>res.status(500).json({msg: 'Cant add new user'}))
})

module.exports = router;
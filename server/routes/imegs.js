var express = require('express');
var router = express.Router();

const connector = require('../api/configeration');

/* GET users listing. */
router.get('/', function(req, res, next) {
  connector.query("select * FROM images where apartment_id=?",[req.query.apartmentid],
  (error,result,feild)=>{
      if(error) throw error;
      res.status(200).json(result);
  })
});

module.exports = router;

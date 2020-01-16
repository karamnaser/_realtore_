var express = require('express');
var router = express.Router();

const connector = require('../api/configeration');

/* GET users listing. */

router.get('/', function(req, res, next) {
  connector.query("select * from cities where country_id = ?",[req.query.countryid],
  (error,result,feild)=>{
      if(error) throw error;
      res.status(200).json(result)
  })
});

module.exports = router;
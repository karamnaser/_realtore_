var express = require('express');
var router = express.Router();
let {getCountry} = require('../api/countryapi');
const connector = require('../api/configeration');

/* GET users listing. */

router.get('/', function(req, res, next) {
  getCountry().then(countryes=>res.status(200).json(countryes))
  .catch(err=>res.status(500).json("faild to load data"))
  })

module.exports = router;
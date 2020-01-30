var express = require('express');
var router = express.Router();
let {getCities} = require('../api/citieapi');

/* GET users listing. */

router.get('/', function(req, res, next) {
  getCities(req.query.countryid).then(cities=>res.status(200).json(cities))
  .catch(err=>res.status(500).json("faild to load data"))
});

module.exports = router;
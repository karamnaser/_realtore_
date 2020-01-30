var express = require('express');
var router = express.Router();
const {getImges} = require('../api/imgapi');
/* GET users listing. */
router.get('/', function(req, res, next) {
  getImges(req.query.apartmentid).then(imeges=>res.status(200).json(imeges))
  .catch(err=>"faild to load data")
});

module.exports = router;

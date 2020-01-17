var express = require('express');
const crypto = require('crypto');
var router = express.Router();
const connector = require('../api/configeration');

var cors = require('cors');

/* GET users listing. */
router.post('/',function (req, res, next) {
  const encPassword = crypto.pbkdf2Sync(req.body.password, 'realtore', 10000, 64, 'sha512');
  connector.query('SELECT * FROM users join roles on users.role_id = roles.id where email = ? and password = ?', 
      [req.body.email, encPassword.toString('hex')],
    (error, result, fields) => {
      if (error) throw error;
      if (result.length > 0) {
        const user = result[0];
        res.cookie("auth",{ userid: user.id, name: `${user.first_name}`, role: user.type,
        city:user.city_id}
        );
        res.status(200).json({ msg: `Welcome ${user.first_name}, you have succsefuly connected`});
      }
     
      else {
        res.json("one of the details is not correct")
      }
    })
});

module.exports = router;
var express = require('express');
const crypto = require('crypto');
var router = express.Router();
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

/* GET users listing. */
router.post('/',function (req, res, next) {
  console.log(req.body)
    // const encPassword = crypto.pbkdf2Sync(req.body.password, 'realtore', 10000, 64, 'sha512');
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const msg = {
      to:req.body.email,
      from: 'realtore@example.com',
      subject:"password",
      text: "hello word",
      html: `<strong>${generatePassword()}</strong>`,
    };
    sgMail.send(msg);
    res.status(200).json(`password was sent to ${req.body.email}`)
});

module.exports = router;
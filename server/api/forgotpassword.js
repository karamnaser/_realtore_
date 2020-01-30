const mailjet = require('node-mailjet');

function sendMail(connector, token, res, req) {
    connector.query(`select * from users where email=?`,[req.body.email],(err,result,feild)=>{
        connector.query(`insert into forgot_password(user_id,token) values(?,?) ON DUPLICATE KEY UPDATE token=? `,[result[0].id,token,token],(err,result)=>{
        
          mailjet
          .connect('c98c3588bf1bb6c784e020dccb9ea4fc', '01da2171e7cedbefdddd0497fca27f8b')
          .post("send", {'version': 'v3.1'})
          .request({
            "Messages":[
              {
                "From": {
                "Email": "karmmn52@gmail.com",
                "Name": "karam"
              },
            "To": [
              {
                "Email": req.body.email,
                "Name": ""
              }
            ],
            "Subject": "password",
            "TextPart": "reset password",
            "HTMLPart": `'<p>Click <a href="http://localhost:3000/restoreuser">here</a> to reset your password</p></br>${token}`,
            "CustomID": "AppGettingStartedTest"
            }
            ]
          }).then((result) => {
            res.status(200).json(`Password sent to ${req.body.email}`)
          })
          .catch((err) => {
            res.status(502).json(`failed to sent password to ${req.body.email}`)
          })
          
        })
    })
}

module.exports = {
    sendMail
}
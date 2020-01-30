const connector = require('../api/configeration');
const authorizeAdmin = (req, res, next) => {
    console.log("put request",req.cookies.auth)
    if(req.cookies.auth && req.cookies.auth.role=="admin"){
        req.isAdmin = true;
        next();
    }else{
        res.status(401).json({msg: 'Unauthorized user'})
    }
}

const checkuserinfo = (req,res,next)=>{
  console.log(req.body)
    connector.query(`SELECT * FROM users u left join forgot_password fg on u.id=fg.user_id where email=? and token=?`,[req.body.email,req.body.token],(err,result,feild)=>{
      console.log(result.length)
      console.log(result)
      if(result.length>=1){
        next()
      }
      else{
        res.status(502).json({msg:"one of the information is not correct"})
      }
    })
  }

module.exports = {
    authorizeAdmin,
    checkuserinfo  
};
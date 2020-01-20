
const authorizeAdmin = (req, res, next) => {
    console.log("put request",req.cookies.auth)
    if(req.cookies.auth && req.cookies.auth.role=="admin"){
        req.isAdmin = true;
        next();
    }else{
        res.status(401).json({msg: 'Unauthorized user'})
    }
}

module.exports = {
    authorizeAdmin
};
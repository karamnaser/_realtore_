
const authorizeAdmin = (req, res, next) => {
    if(req.cookies.auth.role=="admin"){
        req.isAdmin = true;
        next();
    }else{
        res.status(401).json({msg: 'Unauthorized user'})
    }
}

module.exports = {
    authorizeAdmin
};
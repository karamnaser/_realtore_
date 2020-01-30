const express = require('express');
const router = express.Router();
const { authorizeAdmin } = require('../middlewares/auth');
const {getApartment,
       getApartmentCount,
       addApartment,
       updateApartment}=require('../api/apartmentapi')
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'C:/Users/karam/Desktop/realtore/server/public/images/apartment/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
  var upload = multer({ storage: storage })
 


/* GET users listing. */
router.get('/', function (req, res, next) {
    getApartment(req.query,req.query.page).then(apartments=>{
        res.status(200).json(apartments)
    }).catch(err=>res.status(500).json("faild to load data"))
});

router.get("/apartmentnumber",(req,res,next)=>{
    getApartmentCount()
    .then(apartmentnumber=>res.status(200).json(apartmentnumber))
    .catch(err=>res.status(500).json("faild to get data"))  
    })

//post request
router.post('/',upload.single('img'),(req, res, next) => {
    addApartment(req.body.userid, req.body.address,
        `images/apartment/${req.file.originalname}`,req.body.cityid,
        req.body.price, req.body.numberofrooms, req.body.numberofbaths,
        req.body.sqft, req.body.description, req.body.sale_status,req.body.propertytype)
        .then(response=>res.status(201).json("apartment updated sucssesfully"))
        .catch(err=>res.status(500).json("faild to send data"))
})
    
//PUT request

router.put('/:aprtmentid', authorizeAdmin, (req, res, next) => {
    updateApartment(req.body.apartmentstatus, req.params.aprtmentid)
    .then(response=>res.status(200).json(`apartmnet ${req.body.apartmentstatus} succefully`))
    .catch(err=>res.status(500).json("faild to update upartment"))
    });

module.exports = router;
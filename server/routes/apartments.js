const express = require('express');
const router = express.Router();

const connector = require('../api/configeration');
const SearchBuilder = require('../api/searchBuilder');
const { authorizeAdmin } = require('../middlewares/auth');
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'C:/Users/karam/Desktop/realtore/server/public/images/apartment/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+".png")
    }
  })
  var upload = multer({ storage: storage })
 


/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('cookies', req.cookies)     
    let searchbuilder = new SearchBuilder(req.query.page, 10)
    connector.query(searchbuilder.id(req.query.id)
        .cityId(req.query.cityid)
        .country(req.query.countryid)
        .status(req.query.status)
        .roomnumber(req.query.roomnumber)
        .salestate(req.query.salestatuse)
        .avilabilty(req.query.avilabilty)
        .bathnumber(req.query.bathnumber)
        .price(req.query.price)
        .build(), searchbuilder.params, (error, result, filed) => {

            if (error) throw error;
            res.send(JSON.stringify(result));
        });

});

router.get("/apartmentnumber",(req,res,next)=>{
    connector.query("SELECT count(*) FROM apartments",(err,result)=>{
        console.log(result[0])
        res.status(200).json(result[0]["count(*)"])
    })
})


//post request
router.post('/',upload.single('img'),(req, res, next) => {
    console.log(req.body)
    connector.query(`insert into apartments(user_id,address,city_id,price,number_of_room,number_of_bath
        ,sqft,description,sale_status,availability,
        property_type,main_image) values( ?, ? , ?,  ? , ? ,  ? , ? , ? ,  ? ,  ? ,  ? , ? )`, [
            req.body.userid, req.body.address,req.body.cityid,
        req.body.price, req.body.numberofrooms, req.body.numberofbaths,
        req.body.sqft, req.body.description, req.body.sale_status
        ,"available", req.body.propertytype,`images/apartment/${req.file.filename}`], (error, result, filed) => {
            if (error) throw error;
            res.status(201).json({msg: 'apartment succesfully added'});
            res.end();
        })
})
    
//PUT request

router.put('/:aprtmentid', authorizeAdmin, (req, res, next) => {
    console.log(req.body)
    connector.query(`update apartments set status= ? where id = ? `,
        [req.body.apartmentstatus, req.params.aprtmentid]
        , (error, result, filed) => {
            if (error) throw error;
            res.status(200).send(`apartmnet ${req.body.apartmentstatus} succefully`);
        })
})

module.exports = router;
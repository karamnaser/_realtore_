const express = require('express');
const router = express.Router();

const connector = require('../api/configeration');
const SearchBuilder = require('../api/searchBuilder');

const { authorizeAdmin } = require('../middlewares/auth');

const date = new Date();
/* GET users listing. */
router.get('/', function (req, res, next) {
    let searchbuilder = new SearchBuilder(1, 10)
    connector.query(searchbuilder.cityId(req.query.cityid)
        .country(req.query.countryid)
        .roomnumber(req.query.roomnumber)
        .salestate(req.query.salestatuse)
        .avilabilty(req.query.avilabilty)
        .bathnumber(req.query.bathnumber)
        .price(req.query.price)
        .build(), searchbuilder.params, (error, result, filed) => {
            console.log(searchbuilder.params)
            if (error) throw error;
            res.send(JSON.stringify(result));
        });

});

//post request
router.post('/', (req, res, next) => {
    console.log(req.body)
    connector.query(`insert into apartments(user_id,address,city_id,price,number_of_room,number_of_bath
        ,sqft,description,sale_status,availability,
        property_type,main_image) values( ?, ? , ?,  ? , ? ,  ? , ? , ? ,  ? ,  ? ,  ? , ? )`, [2, req.body.address, 1102757,
        req.body.price, req.body.numberofrooms, req.body.numberofbaths,
        req.body.sqft, req.body.description, req.body.salestatus
        , req.body.avilabilty, req.body.propertytype, req.body.img], (error, result, filed) => {
            if (error) throw error;
            res.send("apartment succesfully added");
            res.end();
        })
})

//PUT request

router.put('/:aprtmentid', authorizeAdmin, (req, res, next) => {
    connector.query(`update apartments set status= ? where id = ? `,
        [req.body.apartmentstatus, req.params.aprtmentid]
        , (error, result, filed) => {
            if (error) throw error;
            res.status(200).send(" aptrmnet updated succefully ");
        })
})

module.exports = router;
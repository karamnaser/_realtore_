const connector = require('../api/configeration');
const SearchBuilder = require('../api/searchBuilder');
const getApartment = (apatrmentquery,pagenumber)=>{
    let searchbuilder = new SearchBuilder(pagenumber,10);
       let {id="",cityid="",countryid=""
        ,status="",roomnumber="",
        salestatuse="",avilabilty="",
        bathnumber="",price=""}=apatrmentquery;
        let {query,params} = searchbuilder.id(id)
        .cityId(cityid)
        .country(countryid)
        .status(status)
        .roomnumber(roomnumber)
        .salestate(salestatuse)
        .avilabilty(avilabilty)
        .bathnumber(bathnumber)
        .price(price)
        .build();
    return new Promise((resolve,reject)=>{
        connector.query(searchbuilder.query,searchbuilder.params,(error, result, filed) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
    
    }) 
}

const getApartmentCount=()=>{
    return new Promise((resolve,reject)=>{
        connector.query("SELECT count(*) FROM apartments",(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result[0]["count(*)"]);
        })
    })
    
}

const addApartment = (userid,address,img_name,cityid,price,numberofrooms,
numberofbaths,sqft,description,sale_status,propertytype)=>
{
    return new Promise((resolve,reject)=>{
        connector.query(`insert into apartments(user_id,address,city_id,price,number_of_room,number_of_bath
            ,sqft,description,sale_status,availability,
            property_type,main_image) values( ?, ? , ?,  ? , ? ,  ? , ? , ? ,  ? ,  ? ,  ? , ? )`,[
                userid,address,cityid,price,numberofrooms,numberofbaths,
                sqft,description,sale_status,"available",propertytype,img_name
            ],(err,result)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(result)
            })
    })
}

const updateApartment = (apartmentstatus,apartmentid)=>{
    return new Promise((resolve,reject)=>{
        connector.query(`update apartments set status= ? where id = ? `,
        [apartmentstatus,apartmentid],(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result)
        })
    })
   
}

module.exports={
    getApartment,
    getApartmentCount,
    addApartment,
    updateApartment 
}
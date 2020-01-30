const connector = require('../api/configeration');

const getCities = (countryid)=>{
    return new Promise((resolve,reject)=>{
        connector.query("select * from cities where country_id = ?",[countryid],(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}

module.exports={
    getCities
}
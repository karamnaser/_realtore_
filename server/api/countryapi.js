const connector = require('../api/configeration');

const getCountry = ()=>{
    return new Promise((resolve,reject)=>{
        connector.query("select * from countries",(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}

module.exports={
    getCountry
}
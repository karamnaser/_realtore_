const connector = require('../api/configeration');

const getImges = (apartmentid)=>{
    return new Promise((resolve,reject)=>{
        connector.query("select * FROM images where apartment_id=?",[apartmentid],
  (error,result,feild)=>{
      if(error){
          reject(error);
          return;
      };
     resolve(result)
  })
    })
}

module.exports={
    getImges
}
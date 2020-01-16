const axios=require('axios');


  function getapartments(query){
     return new Promise((resolve,rejection)=>{
      //   let price_query = !price ? '' : `price= ${price}`; 
      //   let numofrooms_query = !rooms ? '' : ` roomnumber = ${rooms}`;
      //   let numofbaths_query = !number_of_beds ? '' : ` bathnumber = ${number_of_beds}`; 
      //   let salestause_query = !status ? '' : ` salestatuse = ${status}`;
      //   let query = price_query+numofrooms_query+numofbaths_query+salestause_query;
        axios.get(`http://localhost:5000/apartments${query}`)
        .then(response =>resolve(response.data));
     })
   
}

 async function getcountrys(){
   return new Promise((resolve)=>{
      axios.get(`http//localhost:5000/country`)
      .then(response =>resolve(response.data))
      
   })
 }

 async function getcitys(){
   return new Promise((resolve)=>{
      axios.get(`http://localhost:5000/cites?countryid=${95}`)
      .then(response =>resolve(response.data));
   })
 }

export {getapartments,getcountrys,getcitys}

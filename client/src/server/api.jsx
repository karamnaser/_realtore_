const axios=require('axios');


  function getapartments(query){
     return new Promise((resolve,rejection)=>{
        axios.get(`http://localhost:5000/apartments${query}`)
        .then(response =>resolve(response.data));
     })
   
}

  function getcountrys(){
   return new Promise((resolve)=>{
      axios.get(`http://localhost:5000/country`)
      .then(response =>resolve(response.data))
      
   })
 }

  function getcitys(id){
   return new Promise((resolve)=>{
      axios.get(`http://localhost:5000/cites?countryid=${id}`)
      .then(response =>resolve(response.data));
   })
 }

function getApartmentImgs(apartmentid){
  return new Promise((resolve)=>{
    axios.get(`http://localhost:5000/imges?apartmentid=${apartmentid}`)
    .then(response =>resolve(response.data));
 })
}
export {getapartments,getcountrys,getcitys,getApartmentImgs}

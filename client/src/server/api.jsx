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

function sendData(rout_name,data){   
   return new Promise((resolve)=>{
      axios.post(`http://localhost:5000/${rout_name}`,{...data})
      .then(response =>resolve(response.data));
   }).catch(error=>error)
}

export {getapartments,getcountrys,getcitys,getApartmentImgs,sendData}

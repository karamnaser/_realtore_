import fetcher from './fetcher';


function getapartments(query) {
   return new Promise((resolve)=>{
      fetcher.get(`/apartments?status=pending&${query}`)
      .then(response=>resolve(response.data))
   })
}

function getapartmentnumbers(){
   return new Promise((resolve)=>{
      fetcher.get(`/apartments/apartmentnumber`)
      .then(response=>resolve(response.data))
   })
}

function getcountrys() {
   return new Promise((resolve) => {
      fetcher.get(`/country`)
         .then(response => resolve(response.data))

   })
}

function getcitys(id) {
   return new Promise((resolve) => {
      fetcher.get(`/cites?countryid=${id}`)
         .then(response => resolve(response.data));
   })
}

function getApartmentImgs(apartmentid) {
   return new Promise((resolve) => {
      fetcher.get(`/imges?apartmentid=${apartmentid}`)
         .then(response => resolve(response.data));
   })
}

 function sendData(rout_name, data) {
       return new Promise((resolve,reject)=>{
          fetcher.post(`/${rout_name}`,data)
      .then(function (response) {
          //handle success
          resolve(response.data);
      })
      .catch(function (response) {
          //handle error
          reject(response.data);
      });
})}

async function changeStatus(id, status) {
      return new Promise((resolve)=>{
         fetcher.put(`/apartments/${id}`, { apartmentstatus: status })
         .then(response=>resolve(response.data))
      })
   }


export { getapartments, getcountrys, getcitys, getApartmentImgs, sendData, changeStatus,getapartmentnumbers }

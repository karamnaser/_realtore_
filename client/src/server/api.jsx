import fetcher from './fetcher';

async function getapartments(query) {
   try{
      const {data} = await fetcher.get(`/apartments${query}`);
      return data;
   }catch(error){
      //TODO:
      throw new Error(error.message);
   }
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

async function sendData(rout_name, data) {
   try {
      const response = await fetcher.post(`/${rout_name}`, { ...data });
      return response.data;
   } catch (error) {
      throw new Error(`Cant save your data. Please try again later...`);
   }

}

async function changeStatus(id, status) {
   try{
      const {data} = await fetcher.put(`/apartments/${id}`, { apartmentstatus: status });
      return data;
   }catch(error){
      console.dir(error);
      
   }
}

export { getapartments, getcountrys, getcitys, getApartmentImgs, sendData, changeStatus }

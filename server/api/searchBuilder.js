

class SearchBuilder{
    constructor(page=1,size=10){
        this.query="SELECT * , p.id as apatrmentid FROM realtor.apartments p join cities c on p.city_id=c.id where 1 "
        this.params=[];
        this.page=page;
        this.size=size
    }
    id(id){
        this.query+=`${!id ? '' : (this.params.push(id) ,' and p.id = ? ')}`
        return this
    }
    cityId(cityid){
        this.query+=`${!cityid ? '' : (this.params.push(cityid) ,' and p.city_id = ? ')}`
        return this
    }
    country(countryid){
        this.query+=`${!countryid ? '' : (this.params.push(countryid) ,' and c.country_id = ? ')}`
        return this
    }
    avilabilty(avilabilty){
        this.query+=`${!avilabilty ? '' : (this.params.push(avilabilty) ,' and p.availability = ? ')}`
        return this
    }
    status(status){
        this.query+=`${!status ? '' : (this.params.push(status) ,' and p.status = ? ')}`
        return this
    }
    salestate(salestate){
        this.query+=`${!salestate ? '' : (this.params.push(salestate) ,' and p.sale_status = ? ')}`
        return this
    }
    roomnumber(roomnumber){
        this.query+=`${!roomnumber ? '' : (this.params.push(roomnumber) ,' and p.number_of_room = ? ')}`
        return this
    }
    bathnumber(numberofbaths){
        this.query+=`${!numberofbaths ? '' : (this.params.push(numberofbaths) ,' and p.number_of_bath = ? ')}`
        return this
    }
    price(price){
        this.query+=`${!price ? '' : (this.params.push(price) ,' and p.price <= ? ')}`
        return this
    }

    build(){
        this.query+=` limit ${(this.page-1)*this.size},${this.size}`
        console.log("query is"+ this.query)
        return this.query;
    }
}
module.exports=SearchBuilder;
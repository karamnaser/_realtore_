class CityCountryBuilder{
    constructor(page=1,size=10){
        this.query="select c.*  from cities c join countries c2 on c.country_id=c2.id where 1";
        this.params=[];
        this.page=page;
        this.size=size
    }
    city(cityname){
        this.query+=`${!cityname ? '' : (this.params.push(cityname) ,' and c.name = ? ')}`
        return this
    }
    country(countryname){
        this.query+=`${!countryname ? '' : (this.params.push(countryname) ,' and c2.name = ? ')}`
        return this
    }
    build(){
        this.query+=` limit ${(this.page-1)*this.size},${this.size}`
        console.log(this.query)
        return this.query;
    }
}
module.exports = CityCountryBuilder;
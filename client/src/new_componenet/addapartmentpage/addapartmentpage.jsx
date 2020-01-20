import React from 'react';

import validate,{field} from '../../validation/validation';
import cookie from 'react-cookies';
import Cookies from 'js-cookie';
import {sendData,getcitys,getcountrys} from '../../server/api';
import roomicon from '../../icons/door.png';
import bathicon from '../../icons/bath.png';
import lenghticon from '../../icons/length.png';
import upload from '../../icons/upload.png'
import  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LogInPage from '../loginpage/login';

class AddApartmentPage extends React.Component{
    constructor(props){
    super(props)
    let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
    this.state = {
        userid:cookie ? JSON.parse(cookie[1])["userid"]:0,
        cityid:field({name:"cityid",isRequired: false}),
        countrys:[],
        citys:[],
        address:field({name:"address",isRequired: false}),
        price:field({name: 'price', isRequired:true}),
        numberofroom:field({name: 'numberofroom', isRequired:false}),
        numberofbath:field({name: 'numberofbath', isRequired:false}),
        sqft:field({name: 'sqft', isRequired:false}),
        discription:field({name: 'discription', isRequired:false}),
        sale_status:field({name: 'sale_status', isRequired:true}),
        propertytype:field({name: 'propertytype', isRequired:true}),
        img:field({name: 'img', isRequired:false}),
        isLogin:false
    }

    
}

componentDidMount(){
    getcountrys().then(countrys=>{
        this.setState({countrys:countrys})
    })
}

inputChange=({target: {name, value}})=>{
    const errors = validate(name, value, this.state[name].validations);

    this.setState({
        [name]: {
            ...this.state[name],
            value,
            errors
        }
    },()=>console.log(this.state));
}

onSubmit = async e => {
    e.preventDefault();
    try{
        await sendData("apartments",{
            userid:this.state.userid,
            city:this.state.cityid.value,
            address:this.state.address.value,
            price:this.state.price.value,
            numberofrooms:this.state.numberofroom.value,
            numberofbaths:this.state.numberofbath.value,
            sqft:this.state.sqft.value,
            description:this.state.discription.value,
            salestatus:this.state.sale_status.value,
            propertytype:this.state.propertytype.value,
            img:this.state.img.value,
            avilabilty:"available"
        }).then(response=>alert(response.msg));
    }catch(error){
        alert(error.msg);
    }
    
}
showApartment = () =>{
    let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
    this.setState({userid:cookie ? JSON.parse(cookie[1])["userid"]:0});
};

render(){
    return(
    <>
    { this.state.userid && this.state.userid!=0 ? 
    <form onSubmit={this.onSubmit} 
    className="row" style={{width: "60%",margin: "auto"}}>

        <div className="col-6">
            <p>price</p>
            <button>$</button>
            <input onBlur={(e)=>this.inputChange(e)} 
                   type="number" name="price"/>
        </div>
        <div className="col-6">
            <p>numberofrooms</p>
            <img src={roomicon}/>
            <input onBlur={(e)=>this.inputChange(e)} 
                   type="number" name="numberofroom"/>
        </div>
        <div className="col-6">
            <p>numberofpath</p>
            <img src={bathicon}/>
            <input onBlur={(e)=>this.inputChange(e)} 
                   type="number" name="numberofbath"/>
        </div>
        <div className="col-6">
            <p>sqft</p>
            <img src={lenghticon}/>
            <input onBlur={(e)=>this.inputChange(e)} 
                   type="number" name="sqft"/>
        </div>
        <div className="col-6 mb-5">
            <p>address</p>
            <textarea onBlur={(e)=>this.inputChange(e)}
                      name="address" placeholder="street,number,city,zip"/>
        </div>
        <div className="col-6 mb-5">
            <p>description</p>
            <textarea onBlur={(e)=>this.inputChange(e)} 
                      name="discription" placeholder="description"/>
        </div>
        <div className="col-6 mb-5">
            <p>property for</p>
            <select onChange={(e)=>this.inputChange(e)} name="sale_status">
            <option selected="selected"></option>
                <option value="both">both</option>
                <option value="rent">rent</option>
                <option value="sale" >sale</option>
            </select>
        </div>
        <div className="col-6">
            <p>type of property</p>
            <select onChange={(e)=>this.inputChange(e)} name="propertytype">
            <option selected="selected"></option>
                <option value="condo">condo</option>
                <option value="house"> house</option>
            </select>
        </div>
        <div className="col-6">
            <p>choos country</p>
            <select onChange={
                (e)=>{
                      getcitys(e.target.value)
                      .then(citys=>{
                          this.setState({citys:citys})
                      })                   
                }} name="country">
                    <option selected="selected"></option>
                {this.state.countrys.map((country)=>{
                    return(
                <option value={country.id}>{country.name}</option>
                )
                })}
                
               
            </select>
        </div>
        <div className="col-6">
            <p>choose city</p>
            <select  onChange={(e)=>this.inputChange(e)} name="cityid">
                <option selected="selected"></option>
                {this.state.citys.map(city=>{
                    return(
                    <option value={city.id}>{city.name}</option>
                    )
                })}
               
            </select>
        </div>
        <div className="col-6">
            <p>upload img</p>
            <img src={upload}/>
            <input onBlur={(e)=>this.inputChange(e)}  
                   type="text" name="img"/>
        </div>
        <div className="col-12">
            <input type="submit"/>
        </div>
    </form>
:<LogInPage showaddpage={this.showApartment}/>}
    </>
    )
}
}
export default AddApartmentPage
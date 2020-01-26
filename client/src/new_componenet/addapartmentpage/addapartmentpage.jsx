import React from 'react';

import validate,{field} from '../../validation/validation';
import cookie from 'react-cookies';
import Cookies from 'js-cookie';
import {sendData,getcitys,getcountrys} from '../../server/api';
import roomicon from '../../icons/door.png';
import bathicon from '../../icons/bath.png';
import dollar from '../../icons/dollar.png'
import lenghticon from '../../icons/length.png';
import upload from '../../icons/upload.png'
import  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LogInPage from '../loginpage/login';
import '../addapartmentpage/addadminmobilecss.css'


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
        isLogin:false,
        data:new FormData()
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
    },()=>console.log(this.state.data.get(name)))
}

onSubmit =  e => {
    e.preventDefault();
        this.state.data.set("userid",this.state.userid);
        console.log(this.state.data)
         sendData("apartments",this.state.data)
         .then(response=>alert(response))
         .catch(err=>alert(new Error("cant save data data misssing")))
}

showApartment = () =>{
    let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
    this.setState({userid:cookie ? JSON.parse(cookie[1])["userid"]:0});
};

render(){
    return(
    <section style={section_style}>
    { this.state.userid && this.state.userid!=0 ? 
    <form action="/profile" method="post"  onSubmit={this.onSubmit} enctype="multipart/form-data"
    className="row" style={form_style}>
        <div className="col-12 mt-5">
        <p className="title" style={{color: "#33ccff",fontSize:"50px"}}>Add Apartment</p>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <div>
            <p>price</p>
            </div>
            <div>
                <img className="icons" src={dollar}/>
                <input className="input" style={inpute_style} onBlur={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} 
                        type="number" name="price"/>
            </div>
        </div>

        <div className="col-md-6 col-sm-12 mt-5">
            <div>
            <p>numberofrooms</p>
            </div>
            <div>
                <img className="icons" src={roomicon}/>
                <input className="input" style={inpute_style} onBlur={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} 
                        type="number" name="numberofroom"/>
            </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <div>
            <p>numberofbath</p>
            </div>
            <div>
                <img className="icons" src={bathicon}/>
                <input className="input" style={inpute_style} onBlur={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} 
                       type="number" name="numberofbath"/>
            </div>
        </div>
        <div className="col-md-6 col-sm-12 sm-col-12 mt-5">
            <p>sqft</p>
            <img className="icons" src={lenghticon}/>
            <input className="input"  style={inpute_style} onBlur={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} 
                   type="number" name="sqft"/>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <p>address</p>
            <textarea className="input"  onBlur={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}}
                      name="address" placeholder="street,number,city,zip"/>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <p>description</p>
            <textarea className="input"  onBlur={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} 
                      name="discription" placeholder="description"/>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <p>property for</p>
            <select className="input"  onChange={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} name="sale_status">
            <option style={inpute_style} selected="selected">select property for</option>
                <option value="both">both</option>
                <option value="rent">rent</option>
                <option value="sale" >sale</option>
            </select>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <p>type of property</p>
            <select className="input"  style={inpute_style} onChange={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} name="propertytype">
            <option selected="selected">type of property</option>
                <option value="condo">condo</option>
                <option value="house"> house</option>
            </select>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <p>choos country</p>
            <select className="input"  style={inpute_style} onChange={
                (e)=>{
                      getcitys(e.target.value)
                      .then(citys=>{
                          this.setState({citys:citys})
                      })
                      this.state.data.set(e.target.name,e.target.value);                   
                }} name="country">
                    <option selected="selected">choose country</option>
                {this.state.countrys.map((country)=>{
                    return(
                <option value={country.id}>{country.name}</option>
                )
                })}
                
               
            </select>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <p>choose city</p>
            <select className="input"  style={inpute_style} onChange={(e)=>{this.inputChange(e);this.state.data.set(e.target.name,e.target.value)}} name="cityid">
                <option selected="selected">choose city</option>
                {this.state.citys.map(city=>{
                    return(
                    <option value={city.id}>{city.name}</option>
                    )
                })}
               
            </select>
        </div>
        <div className="col-md-7 col-sm-12 mt-5">
            <img src={upload}/>
            <input className="input uploadinput"  id="file-id" onChange={(e)=>{
                this.inputChange(e);
                this.state.data.set(e.target.name,e.target.files[0])
                }
            }
                   type="file" name="img" />
        </div>
        <div className="col-12 mt-5 d-flex justify-content-center">
            <input type="submit" className="btn btn-light"/>
        </div>
    </form>
:<LogInPage showaddpage={this.showApartment}/>}
    </section>
    )
}
}
export default AddApartmentPage

let section_style={
    backgroundImage:"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
}

let form_style={width: "50%",
                margin: "auto",
                backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
            }
let uploadparagraph_sytle={
    textAlign:"center",
    width:"85%"
}
let inpute_style={
    borderRadius:"7px",
    border:"1px solid",
    background:"white"
}

let buton_style={
    border:"1px solid",
    background:"white",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius:"7px",
    backgroundImage:"linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)"
}

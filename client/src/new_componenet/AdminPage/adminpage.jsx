import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Gallary from '../gallary/gallary'
import {getapartments,changeStatus,getapartmentnumbers} from '../../server/api';
import LogInPage from '../loginpage/login'
import Cookies from 'js-cookie';
import NumberBar from '../numberbar/numbersbar'



class AdminPage extends React.Component{
    constructor(props){
        super(props)
        let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
        this.state = {
            userid:cookie ? JSON.parse(cookie[1])["userid"]:0,
            apartmens:[],
            apartmentid:0,
            page:1,
            aprtmentnumber:0
        }
    }
    componentDidMount(){
        getapartments(`?status=pending&page=${this.state.page}`).then(apartmens=>{
            this.setState({apartmens:apartmens})
        })
        getapartmentnumbers().then(apartmentsnumber=>{
            this.setState({aprtmentnumber:apartmentsnumber})
        })
    }
    handleData=(e)=>{
        let target = e.target;
        let value=target.value;
        let name=target.name;
        this.setState({[name]:value},()=>getapartments(`?status=pending&page=${this.state.page}`).then(apartmens=>{
            this.setState({apartmens:apartmens})
        }))
        
    }
    getApartmentId(i){
       let apartmentid=document.getElementsByName("aprtmentid")[i].value;
       this.state.apartmentid=apartmentid
    }

    showApartment = () =>{
        let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
        this.setState({userid:cookie ? JSON.parse(cookie[1])["userid"]:0});
    };

    getapartmentDiscreption(aprtment){

        var apartment_discription="";
      
        if(aprtment["number_of_beds"]){
      
            var apartments_bed=aprtment["number_of_beds"]+" beds ";
            apartment_discription+=apartments_bed;
      
        }
      
      
        if(aprtment["number_of_rooms"]){
      
            var apartments_rooms=aprtment["number_of_rooms"]+" room ";
            apartment_discription+=apartments_rooms;
      
        }
      
        if(aprtment["sqft"]){
      
            var apartments_size=aprtment["sqft"]+" sqft"+"\n";
            apartment_discription+=apartments_size;
      
        }
      
        if(aprtment["address"]){
      
            var apartments_addres=aprtment["address"];
            apartment_discription+= apartments_addres
      
        }
      
        return apartment_discription;
        
      }
      
    render(){
        return(    
            <section className="container-fluid p-0" style={section_style}>
            {this.state.userid && this.state.userid!=0 ?  
            this.state.apartmens && this.state.apartmens.length>1 ?
            <div className="row" style={row_style}>
            {this.state.apartmens.map((apartment,i)=>{
                return(
                <>
                <div className="lg-col-6 sm-col-12">
                    <div className="m-3">
                <div className="mt-3" style={img_wraper_style}>
                <div className="mt-3">
                        <p>{apartment["description"]}</p>
                    </div>
                    <img style={img_style}  src={`http://localhost:5000/${apartment["main_image"]}`}/>
                    <div className="mt-3">
                        <p>{this.getapartmentDiscreption(apartment)}</p>
                    </div>
                    
                </div>
                <div>
                <div className="mt-3">
                <button style={buton_style} onClick={(e)=>{
                    this.handleData(e);
                    this.getApartmentId(i);
                    changeStatus(this.state.apartmentid,e.target.value).then(response=>alert(`${response}${this.state.apartmentid}`))
                    }} name="status" value="approved">approve</button>
                <input style={inpute_style} name="aprtmentid" type="text" value={apartment.apatrmentid}/>
                </div>
                <div className="mt-3">
                <button style={buton_style} onClick={(e)=>{
                    this.handleData(e);
                    this.getApartmentId(i);
                    changeStatus(this.state.apartmentid,e.target.value).then(response=>alert(`${response}${this.state.apartmentid}`))
                    }} name="status" value="suspended">suspend</button>
                <input style={inpute_style} type="text" value={apartment.apatrmentid}/>
                </div>
                <div className="mt-3">
                <button style={buton_style} onClick={(e)=>{
                    this.handleData(e);
                    this.getApartmentId(i);
                    changeStatus(this.state.apartmentid,e.target.value).then(response=>alert(`${response}${this.state.apartmentid}`))
                    }} name="status" value="removed">remove</button>
                <input style={inpute_style} type="text" value={apartment.apatrmentid}/>
                </div>
                </div>
            </div>
            </div>
                </>
            )})}
            <div className="col-12">
            <NumberBar handledata={this.handleData} apartmentquqntity={Math.round(this.state.aprtmentnumber/10)}/>
            </div>
            </div> : "loading":<LogInPage showaddpage={this.showApartment}/>}
            </section>
        )
    }
}
export default AdminPage;
let section_style={
    backgroundImage:"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
}
let row_style={
   width:"90%",
   margin:"auto"
}

let img_wraper_style={
    width:"70%",
    margin:"auto",
    border:"1px solid",
    borderRadius:"25px"
}

let img_style={
    width:"100%",
    borderRadius:"25px"
}

let inpute_style={
    borderBottomRightRadius:"7px",
    borderTopRightRadius:"7px",
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

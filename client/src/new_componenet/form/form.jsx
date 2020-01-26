import React from 'react';
import Price_btn from './price_btn/price_btn';
import PriceMenue from './price_btn/price_menue'
import RoomBtn from './rooms/room_btn'
import RoomMenu from './rooms/room_menue'
import BathBtn from './bath/bathbtn'
import BathMenu  from './bath/bath_menu'
import StatusBtn from './status/status_Btn'
import StatusMenu from './status/status_menue'
import Gallary from '../gallary/gallary.jsx';
import NumberBar from '../numberbar/numbersbar.jsx'
import {getapartments,getcitys,getcountrys,getapartmentnumbers} from '../../server/api.jsx'
import './formsearchmobilecss.css'
class Form extends React.Component{

    constructor(props){

        super(props)

        this.state={
            apartments:[],
            apartmentsnumber:0,
            cities: [],
            countrys:[],
            openfilterlist : false,
            opendmenue: -1 ,
            img_type:this.props.img_type,
            img_sorce:this.props.img_sorce,
           searchparams : {},
           search: ''
            
        }

    }


    componentDidMount(){
       getapartments(window.location.search).then(apartments_arr=>{
           this.setState({apartments:apartments_arr},()=>{

           })
       }).catch(error=>console.log(error));

       getcountrys().then(countrys=>{
           this.setState({countrys:countrys})
       })
       getapartmentnumbers().then(apartmentsnumber=>{
           this.setState({apartmentsnumber:apartmentsnumber})
       })
}


    make_list_active = (i)=> {
        this.setState({
            opendmenue: this.state.opendmenue === i ? -1 : i
        })
    }

   
    getbuttonvalu=(e)=>{
        
        let query="";
        let target=e.target;
        let name=target.name
        let value=target.value
        this.state.searchparams[name]=value
        for(let searchparam in this.state.searchparams){    
            query+=searchparam+"="+this.state.searchparams[searchparam]+"&"
        console.log("getbuttonvalue",query)
    }
    getapartments(query).then(apartments_arr=>{
        this.setState({apartments:apartments_arr},()=>{
            console.log("searchparams",window.location.search)
        })
    }).catch(error=>console.log(error));
}


    openfilterlist=()=>{
      this.setState({openfilterlist:!this.state.openfilterlist})
        }

    
    render(){
        return(
             <div  style={{backgroundImage:"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}}>

              {
                this.props.img_type=="apartments" 

                      &&
                  
                    
                    <div id="form" className="d-flex p-5 container justify-content-center">

                        <div className="country_city_search d-none d-lg-flex" style={{display:"flex",margin:"0 10px",position:"relative"
                                    ,justifyContent:"space-between",width:"42%"}}>

                            <select style={{width:"40%"}} name="countryid" onChange={(e)=>{this.getbuttonvalu(e);
                             getcitys(e.target.value).then(cities=>{
                                this.setState({cities:cities},()=>console.log(this.state.cities))
                            })}}>
                                <option selected="selected">choos country</option>
                                {this.state.countrys.map((country)=>{
                                    return(
                                <option value={country.id}>{country.name}</option>
                                    )
                                })}
                            </select>
                            <select style={{width:"40%"}} name="cityid" onChange={(e)=>this.getbuttonvalu(e)}>
                                <option selected="selected">choos city</option>
                            {this.state.cities.map((city)=>{
                                    return(
                                <option value={city.id}>{city.name}</option>
                                    )
                                })}
                            </select>
                        </div>


                    <div>

                     
                     <button className="d-lg-none"
                             style={filter_btn_style}
                             onClick={()=>this.openfilterlist()}>  
                             

                        filter


                     </button>

                    {
                        this.state.openfilterlist 

                            &&

                        <div className="filter_list d-lg-none">
                            <div className="country_city_search mt-2">
                            <select style={{width:"40%",marginRight:"10px"}} name="countryid" onChange={(e)=>{this.getbuttonvalu(e);
                             getcitys(e.target.value).then(cities=>{
                                this.setState({cities:cities},()=>console.log(this.state.cities))
                            })}}>
                                <option selected="selected">choos country</option>
                                {this.state.countrys.map((country)=>{
                                    return(
                                <option value={country.id}>{country.name}</option>
                                    )
                                })}
                            </select>
                            <select style={{width:"40%"}} name="cityid" onChange={(e)=>this.getbuttonvalu(e)}>
                                <option selected="selected">choos city</option>
                            {this.state.cities.map((city)=>{
                                    return(
                                <option value={city.id}>{city.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                            <div>
                                <Price_btn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==1 && <PriceMenue sendvaluetostate={this.getbuttonvalu}/>}
                            </div>
                            
                            <div>
                                <RoomBtn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==2 && <RoomMenu sendvaluetostate={this.getbuttonvalu}/>}
                            </div>

                            <div>
                                <BathBtn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==3 && <BathMenu sendvaluetostate={this.getbuttonvalu}/>}
                            </div> 

                            <div>   
                                <StatusBtn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==4 && <StatusMenu sendvaluetostate={this.getbuttonvalu}/>}
                            </div>


                     </div>
                     }
                       

                    </div>

                <div className="d-none d-lg-flex">


                     <div style={{position:"relative"}}>

                                <Price_btn make_list_active={this.make_list_active}/>

                                
                                {
                                    this.state.opendmenue==1 
                                
                                         &&

                                    <PriceMenue sendvaluetostate={this.getbuttonvalu}/>    

                                }    

                               

                    </div>

                    <div style={{position:"relative"}}>

                        <RoomBtn make_list_active={this.make_list_active}/>

                        {
                            this.state.opendmenue==2

                                 &&

                             <RoomMenu sendvaluetostate={this.getbuttonvalu}/>

                        }

                    </div>
                    <div style={{position:"relative"}}>

                        <BathBtn make_list_active={this.make_list_active}/>

                        {this.state.opendmenue==3 && <BathMenu sendvaluetostate={this.getbuttonvalu}/>}

                    </div>

                    <div style={{position:"relative"}}>


                        <StatusBtn make_list_active={this.make_list_active}/>

                        {this.state.opendmenue==4 && <StatusMenu sendvaluetostate={this.getbuttonvalu}/>}

                    </div>

                </div>

                
            </div>
    }


            <Gallary items={this.state.apartments}
                     img_type={this.state.img_type} 
                     img_sorce={this.state.img_sorce} 
                     title={this.props.title}  
                     gotfooter={this.props.bool}/>

            <NumberBar handledata={this.getbuttonvalu} apartmentquqntity={Math.floor(this.state.apartmentsnumber/10)}/>
            </div>
        )
    }
}

let style={
    widows:"100%",

    height:"100%",

    background:"red",

    border:"1px solid gray",

    borderTopRightRadius:"2px",

    borderBottomRightRadius:"2px"

}

let input_style={
    border:"1px solid gray",

    borderTopLeftRadius:"2px",

    borderBottomLeftRadius:"2px"

}

let filter_btn_style={

    border:"1px solid gray",

    borderRadius:"3px",

    background:"white",

    margin:"0 5px"
    
}



export default Form;


// style={{padding: "35px 0px",
//                                      display:"flex",
//                                      justifyContent:"space-evenly",
//                                      position:"absolute",
//                                      zIndex:"999",
//                                      background:"white",
//                                      left:"0px",
//                                      top:"220px",                            
//                                      width:"107vw"}}
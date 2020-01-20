import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {getapartments,changeStatus} from '../../server/api';
import LogInPage from '../loginpage/login'
import Cookies from 'js-cookie';


class AdminPage extends React.Component{
    constructor(props){
        super(props)
        let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
        this.state = {
            userid:cookie ? JSON.parse(cookie[1])["userid"]:0,
            apartmens:[],
            apartmentid:0
        }
    }
    componentDidMount(){
        getapartments("?status=pending").then(apartmens=>{
            this.setState({apartmens:apartmens})
        })
    }
    handleData=(e)=>{
        let target = e.target;
        let value=target.value;
        let name=target.name;
        this.setState({[name]:value})
    }
    getApartmentId(i){
       let apartmentid=document.getElementsByName("aprtmentid")[i].value;
       this.state.apartmentid=apartmentid
    }

    showApartment = () =>{
        let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
        this.setState({userid:cookie ? JSON.parse(cookie[1])["userid"]:0});
    };
    render(){
        return(    
            
            <div className="row">
            {this.state.userid && this.state.userid!=0 ?  
            this.state.apartmens && this.state.apartmens.length>1 ?
            this.state.apartmens.map((apartment,i)=>{
                return(
                <>
                <div>
                <button onClick={(e)=>{
                    this.handleData(e);
                    this.getApartmentId(i);
                    changeStatus(this.state.apartmentid,e.target.value).then(response=>alert(`${response}${this.state.apartmentid}`))
                    }} name="status" value="approved">approve</button>
                <input name="aprtmentid" type="text" value={apartment.apatrmentid}/>
                </div>
                <div>
                <button onClick={(e)=>this.handleData(e)} name="status" value="suspended">suspend</button>
                <input type="text" value={apartment.apatrmentid}/>
                </div>
                <div>
                <button onClick={(e)=>this.handleData(e)} name="status" value="removed">remove</button>
                <input type="text" value={apartment.apatrmentid}/>
                </div>
                </>
            )}):"loading":<LogInPage showaddpage={this.showApartment}/>}
            </div>
        )
    }
}
export default AdminPage;

import React from 'react'
import {sendData} from '../server/api'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:""
        }
    }

    getEmail({target:{name,value}}){
        this.setState({[name]:value},()=>console.log(this.state))
        
    }
    sendmail(){
        sendData('forgotpassword',{email:this.state.email})
        .then(respone=>alert(respone))
    }
    render(){
        return(
            <div style={input_div}>
                <button style={buton_style}  onClick={()=>this.sendmail()} name="email">send email</button>
                <input style={inpute_style} onChange={(e)=>this.getEmail(e)} name="email" type="email"/>
            </div>
        )
    }
}
let input_div={
    padding:"15%",
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}
let inpute_style={
    borderRadius:"7px",
    border:"1px solid",
    background:"white"
}

let buton_style={
    margin:"0 10px",
    border:"1px solid",
    background:"white",
    borderRadius:"7px",
    backgroundImage:"linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)"
}
export default ForgotPassword;
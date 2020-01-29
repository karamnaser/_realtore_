import React from 'react'
import {sendData} from '../server/api'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class RestoreUserPasswordPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            email:"",
            token:""
        }
    }

    getEmailandPassword({target:{name,value}}){
        this.setState({[name]:value},()=>console.log(this.state))
        
    }
    sendeData(){
        sendData('forgotpassword/restorepassword',{email:this.state.email,password:this.state.password,token:this.state.token})
        .then(respone=>alert(respone.msg))
        .catch(err=>alert("faild to change data"))
    }
    render(){
        return(
            <form onSubmit={()=>this.sendeData()} style={form_style}>
                <div className="mb-4">
                <h1>User Password Restoreation Page</h1>
                </div>
                <div className="m-2">
                <input placeholder="insert your email" style={inpute_style} onChange={(e)=>this.getEmailandPassword(e)} name="email" type="email"/>
                </div>
                <div className="m-2">
                <input placeholder="insert your password" style={inpute_style} onChange={(e)=>this.getEmailandPassword(e)} name="password" type="password"/>
                </div>
                <div className="m-2">
                <input placeholder="enter token" style={inpute_style} onChange={(e)=>this.getEmailandPassword(e)} name="token" type="text"/>
                </div>
                <div className="mt-4">
                <input type="submit" style={buton_style} name="password" value="change password"/>
                </div>
            </form>
        )
    }
}
let form_style={
    display:"flex",
    flexDirection:"column",
    padding:"15%",
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
}

let inpute_style={
    borderRadius:"7px",
    border:"1px solid",
    background:"white",
    textAlign:"center"
}

let buton_style={
    margin:"0 10px",
    border:"1px solid",
    background:"white",
    borderRadius:"7px",
    backgroundImage:"linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)"
}
export default RestoreUserPasswordPage;
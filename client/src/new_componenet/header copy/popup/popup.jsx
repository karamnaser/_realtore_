import React from 'react'
import x from '../../../images/x.png'
import './popup.css'
import {sendData} from '../../../server/api'
import validate,{field} from '../../../validation/validation'
import { Link } from 'react-router-dom'
class PopUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: field({name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}),
            password:field({name: 'password', isRequired:true, minLength: 4}),
            username:field({name: 'username', isRequired:true, minLength: 2}),
            userlastname:field({name: 'userlastname', isRequired:true, minLength: 2}),
            msg:""
        }
    }

    handleData=(e)=>{
        let target = e.target;
        let value=target.value;
        let name=target.name;
        this.setState({[name]:{...this.state[name],value}})
    }

    inputChange=({target: {name, value}})=>{
        const errors = validate(name, value, this.state[name].validations);

        this.setState({
            [name]: {
                ...this.state[name],
                value,
                errors
            }
        },()=>console.log(this.state[name]));
    }

        render(){

            return(
                <div className='popup-wrapper' style={popupWrapper} onClick={(e)=>{

                       
                        e.preventDefault();

                        if(e.target.className!="" && e.target.className!="popup"  && e.target.className!="popup-right-side" && e.target.className!="popup-left-side"){

                            console.log("popupwraper function",e.target.className)

                            this.props.closepopup()

                        }
                
                }}>
            <div className="container shadow-sm popup" style={popup_style}>

                <div className="popup-left-side" style={popupleftside_style}>


                    <div>

                        <h1>Log in to your account</h1>

                        <p>Access all your saved properties, searches, notes and more</p>

                    </div>


                    <div style={textDiv}>

                        <input name="email" onSelect={(e)=>{
                            this.handleData(e);
                        
                        }}
                       
                               style={text__inpute_style} type="text" placeholder="email"/>

                        <input name="password" onSelect={(e)=>this.handleData(e)}  
                               style={text__inpute_style} type="password" placeholder="password"/>

                    </div>

                    <div>

                        <div style={popup_footer_style}>

                            <Link to={'/ForgotPassword'}>Forgot Password</Link>   

                        </div>

                        <div style={log_in_div_style}>

                            <button onClick={()=>{sendData("login",{email:this.state.email.value,password:this.state.password.value})
                                                .then(response=>{alert(response.msg);window.location.reload()})
                                                .catch(err=>alert("one of the details is not correct"))
                                                }}
                                    style={logon_style}>log in</button>

                           

                        </div>

                    </div>

                </div>

                <div style={popup_right_side} className="popup-right-side">

                    <div className="img wraper" style={{textAlign:"end"}}>

                            <img onClick={()=>this.props.closepopup()} src={x} width="5%"/>

                    </div>

                    <div>
                        <h1>sign up</h1>
                    </div>
                    <div style={textDiv}>

                    <input name="username" onSelect={(e)=>this.handleData(e)}
                           onBlur={(e)=>this.inputChange(e)}             
                           style={text__inpute_style} type="text" placeholder="name"/>
                           
                    { this.state.username.errors.map((error, i) => (

                        <small key={i} className="form-text text-danger">

                            {error}
                        </small>
                    ))}

                        <input name="userlastname" onSelect={(e)=>this.handleData(e)} 
                               onBlur={(e)=>this.inputChange(e)}
                               style={text__inpute_style} type="text" placeholder="lastname"/> 

                        { this.state.userlastname.errors.map((error, i) => (

                            <small key={i} className="form-text text-danger">

                                {error}

                            </small>
                        ))}  

                        <input name="email" onSelect={(e)=>this.handleData(e)} 
                               onBlur={(e)=>this.inputChange(e)}
                               style={text__inpute_style} type="text" placeholder="email"/>

                        { this.state.email.errors.map((error, i) => (

                            <small key={i} className="form-text text-danger">

                                {error}
                            </small>
                        ))}

                        <input name="password" onSelect={(e)=>this.handleData(e)} 
                               onBlur={(e)=>this.inputChange(e)}
                               style={text__inpute_style} type="password" placeholder="password"/>

                        { this.state.password.errors.map((error, i) => (

                            <small key={i} className="form-text text-danger">

                                {error}
                            </small>
                        ))}    

                    </div>
                    
                    <div>

                        <div style={popup_footer_style}>

                            <button onClick={()=>sendData("signin",{name:this.state.username.value,
                                                                    lastname:this.state.userlastname.value,
                                                                    email:this.state.email.value,
                                                                    password:this.state.password.value})
                                                                   .then(msg=>alert(msg.msg))} 
                                    style={{...logon_style,background:"blue"}}>Sign-Up</button>   

                        </div>

                    </div>

                </div>


            </div>
            </div>

            )


        }



}

const popupWrapper = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100000,
    padding: '20px'
}

let popup_style={

    display:"flex",

    background:"white"

}

let popupleftside_style={

    position:"relative",

    zIndex:"999",

    width:"83%"
}

let popup_right_side={

    width: "70%",

    position:"relative",

    zIndex:"999",

    display: "flex",

    flexDirection: "column",

    alignItems: "end",

    paddingLeft: "30px",

    borderLeft: "1px solid gray"


}

let textDiv={

    display:"flex",

    flexDirection:"column",

    position:"relative",

    zIndex:"999"

}

let text__inpute_style={

    border:"1px solid gray",

    borderRadius:"2px",

    height:"30px",

    margin:"5px",

    position:"relative",

    zIndex:"999"


}

let popup_footer_style={

    textAlign: "right",

    position:"relative",

    zIndex:"999"


}

let log_in_div_style={

    display:"flex",

    justifyContent: "space-around",

    margin:"30px 0px",

    position:"relative",

    zIndex:"999"
}

let logon_style={

    border:"0px",

    background:"red",

    borderRadius:"3px",

    height:"42px",

    width:"100px",

    position:"relative",

    zIndex:"999"

}

export default PopUp;

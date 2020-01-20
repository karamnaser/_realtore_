import React from 'react'
import {sendData} from '../../server/api';
import validate,{field} from '../../validation/validation';
import AddApartmentPage from '../addapartmentpage/addapartmentpage';
class LogInPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: field({name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}),
            password:field({name: 'password', isRequired:true, minLength: 4}),
            msg:"",
        }
    }
    handleData=(e)=>{
        let target = e.target;
        let value=target.value;
        let name=target.name;
        this.setState({[name]:{...this.state[name],value}})
    }

        render(){

            return(
                <div className='popup-wrapper' style={popupWrapper}>
                
            <div className="container  popup" style={popup_style}>

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
                               style={text__inpute_style} type="text" placeholder="password"/>

                    </div>

                    <div>

                        <div style={popup_footer_style}>

                            <button style={{border:"none",background:"white"}}>Forgot Password</button>   

                        </div>

                        <div style={log_in_div_style}>

                            <button onClick={()=>{sendData("login",{email:this.state.email.value,password:this.state.password.value})
                                                .then(response=>{response.msg ?  this.props.showaddpage(): alert(response); 
                                                
                                            })}}
                                    style={logon_style}>log in</button>

                           

                        </div>

                    </div>

                </div>
            </div>
            </div>

            )


        }



}

const popupWrapper = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
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

export default LogInPage;

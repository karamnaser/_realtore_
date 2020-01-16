import React from 'react'
import x from '../../../images/x.png'
import './popup.css'

class PopUp extends React.Component{


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

                        <input style={text__inpute_style} type="text" placeholder="email"/>

                        <input style={text__inpute_style} type="text" placeholder="password"/>

                    </div>

                    <div>

                        <div style={popup_footer_style}>

                            <button style={{border:"none",background:"white"}}>Forgot Password</button>   

                        </div>

                        <div style={log_in_div_style}>

                            <button style={logon_style}>log in</button>

                            <button style={{border:"none",background:"white"}}> No account? Sign Up</button>

                        </div>

                    </div>

                </div>

                <div style={popup_right_side} className="popup-right-side">

                    <div className="img wraper" style={{textAlign:"end"}}>

                            <img onClick={()=>this.props.closepopup()} src={x} width="5%"/>

                    </div>

                    <div>

                        <h1>Log in to your account</h1>

                        <p>Access all your saved properties, searches, notes and more</p>

                    </div>


                    <div>

                        <div style={popup_footer_style}>

                            <button style={{...logon_style,background:"blue"}}>Pro-log in</button>   

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

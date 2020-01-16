import React from 'react';
import  HeaderIcon from './header-icon';
import icon from '../../icons/logo.png';
import NaveMenue from './headerr_left_side/nave-menue';
import HeaderRightside from './header_right_side/headerrightside';
import Popup from '../header copy/popup/popup'
import '../header.css'
    class HeaderNave extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                mobileNavOpen: false,

                isPopupOpen:false
            }
        }

        toggleMobileNav = () => {
            this.setState({
                mobileNavOpen: !this.state.mobileNavOpen
            })
        }
        openPopup = () => {
            this.setState({
                isPopupOpen: true
            })
        }

        closePopUp=()=>{

            this.setState({
                isPopupOpen: false
            })

        }
        render(){
            let donothing=()=>{

            }


            

        return (
        
            <div style={{position:"relative"}} 
                 className="container-fluid header">

                   {this.state.isPopupOpen && <Popup closepopup={this.closePopUp}/>}

                    
                    <div onClick={()=>{

                            this.toggleMobileNav()

                    }} className="d-lg-none d-sm-block">

                        <div style={{width:"37px",height:"4px",background:"black",margin:"10px 10px"}}></div>

                        <div style={{width:"37px",height:"4px",background:"black",margin:"10px 10px"}}></div>

                        <div style={{width:"37px",height:"4px",background:"black",margin:"10px 10px"}}></div>

                        {
                        
                            this.state.mobileNavOpen

                                &&
                            
                            <div className="hiddin-nav-menue">

                                <NaveMenue/>

                            </div>
                                
                        }

                    </div>


                    <div id="header-left-side">

                        <div>

                            <HeaderIcon onmousehover={donothing}  icon={icon}/>


                        </div>

                         <div className="d-lg-flex d-none">

                            <NaveMenue/>

                        </div>

                    </div>

                    <div className="d-lg-block d-none" id="header-right-side">

                            <HeaderRightside showpopup={this.openPopup} leftsidearr={[["log-in","/"],["sign-up","/"],["advertise","/"]]}/>

                    </div>

        </div>)
    }
} 

export default  HeaderNave;




                     
                    
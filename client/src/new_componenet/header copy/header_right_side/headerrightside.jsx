import React from 'react';
import '../../header.css';
import  HeaderIcon from '../header-icon';
import IphoneHiddinBox from './iphone_hiddin_box';
import iphonicon from '../../../icons/iphon.png';
import Cookies from 'js-cookie';

class HeaderRightside extends React.Component{

    constructor(props){

        super(props);

        this.state={

            show_box:-1

        };

    }

    show_div=()=>{

        this.setState({show_box:1})

    }

    disable_div=()=>{

        this.setState({show_box:-1})

    }

    render(){
        const leftsidearr=this.props.leftsidearr.map((iteam)=>{
              return(

                <div>

                    <a onClick={()=>{if(iteam[0]=="log-in/sign-up"){ 
                        this.props.showpopup();
                    }
                    else if(iteam[0]=="logout"){
                        Cookies.remove("auth");
                        window.location.reload();
                    }
                }}>{iteam[0]}</a>

                </div>

                )

            });

            return(

                <div onMouseLeave={()=>this.disable_div()} 
                     className="right-side-links">

                         {leftsidearr}

                </div>
                )
                
            }
        }
        export default HeaderRightside;
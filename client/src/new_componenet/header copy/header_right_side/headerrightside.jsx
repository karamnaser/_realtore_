import React from 'react';
import '../../header.css';
import  HeaderIcon from '../header-icon';
import IphoneHiddinBox from './iphone_hiddin_box';
import iphonicon from '../../../icons/iphon.png';
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

                    <a onClick={()=>this.props.showpopup()}>{iteam[0]}</a>

                </div>

                )

            });

            return(

                <div onMouseLeave={()=>this.disable_div()} 
                     className="right-side-links">

                        <HeaderIcon onmousehover={this.show_div} 
                                    icon={iphonicon} id="iphone-hiddin-box-id"/>

                        {

                            this.state.show_box!=-1

                            &&

                            <IphoneHiddinBox/>
                            
                        }

                         {leftsidearr}

                </div>
                )
                
            }
        }
        export default HeaderRightside;
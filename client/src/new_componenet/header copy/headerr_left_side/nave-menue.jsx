import React from 'react';
import '../../nav-menue.css';
import InnerMenue from './innermenue';
import {navigation} from '../nav-data/links_data'
import {Link
} from "react-router-dom";

class NaveMenue extends React.Component{
    constructor(props){
        super(props);
        this.state={

            objs:navigation,

            activelist: -1,

            isMobileOpen: this.isMobileOpen,

        };

        
        
    }

    
    onHover = (i) => {

        this.setState({

                        activelist:i

                      }) 

    }
    
    render(){
        
        const links = this.state.objs.map((obj_iteam,i)=>{  

        return (

            <ul style={{listStyle:"none", marginBottom: 0,height: "36px"}} 
                key={i}>

                <li style={{height: "39px"}} 
                    onMouseOver={() => this.onHover(i)}
                    onMouseLeave={() => this.onHover(-1)}  
                    className="menue-iteam">


                        <Link className="main-link" 
                              to={"/" + obj_iteam.label}
                        >
                              
                              
                              {obj_iteam.label}
                              

                        </Link>


                    {
                        this.state.activelist==i

                        &&

                        <InnerMenue iteam={obj_iteam.innerMenu}/>
                    }

                </li>

            </ul>

                    )

                });
                
                return (

                    <div  className="nav-menue"
                          style={{display:"flex"}}>

                              
                            {links}
    
                    </div>

                    )
                }
            } 
            
            export default NaveMenue;
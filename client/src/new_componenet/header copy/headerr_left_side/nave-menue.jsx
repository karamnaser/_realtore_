import React from 'react';
import '../../nav-menue.css';
import Cookies from 'js-cookie';
import {navigation} from '../nav-data/links_data'
import {Link
} from "react-router-dom";

class NaveMenue extends React.Component{
    constructor(props){
        let cookie =Cookies.get("auth") ? Cookies.get("auth").split("j:"):"";
        super(props);
        this.state={
            userrole:cookie ? JSON.parse(cookie[1])["role"]:0,
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
            <>
            {this.state.userrole == "admin" && obj_iteam.label=="AdminPage"?
            <ul style={{listStyle:"none", marginBottom: 0,height: "36px",padding:"4px 20px"}} 
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
                </li>
                </ul>
        : obj_iteam.label !="AdminPage" 
        &&
        <ul style={{listStyle:"none", marginBottom: 0,height: "36px",padding:"4px 20px"}} 
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
        </li>
        </ul>}</>)
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
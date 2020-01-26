import React from 'react'


class BathMenu extends React.Component{
    
    
    constructor(props){
        
        
        super(props);
        
        
        this.state={
            
            button_values:[1,2,3,4,5,6]
            
        }
        
    }
    
    
    render(){
        
        let buttons=this.state.button_values.map((value)=>{
            
            return(
                
                <div className="radio">
                
                <button style={{...beds_menue_style}} 
                name="bathnumber"
                value={value}
                onClick={(e)=>this.props.sendvaluetostate(e)}
                >
                
                
                {value}
                
                
                </button>
                
                </div>
                )
            })
            
            
            return(
                
                
                
                <div style={{width:"363px",height:"214px"
                ,position:"absolute",zIndex:"10000",background:"white"}} 
                className="bathmenue row flex-column shadow-sm">
                
                
                <div style={{background:"gray",textAlign:"left"}}>
                
                <p>
                
                bath
                
                </p>
                
                </div>
                
                <div className="bathmenue d-flex flex-wrap m-3">
                
                {buttons}
                
                </div>
                
                </div>
            
            )
            
            
            
        }
        
        
    }
    let beds_menue_style={

        border: "1px solid red",
    
        borderRadius:"50%",
    
        width:"52px",
    
        height: "43px",
    
        background:"white",
    
        margin:"5px"
    }

    export default BathMenu;
import React from 'react';
class StatusMenu extends React.Component{
    constructor(props){
        
        super(props)
        
        this.state={
            
            activelist:false,
            
            button_values:["both","sale","rent"],

            button_name:["both","sale","rent"]
            
        }
    }
    
    
    render(){
        
        
        let buttons=this.state.button_name.map((value,i)=>{
            
            return(
                
                <div style={{display:"flex",alignItems:"center"}} 
                className="radio">
                
                <button style={{...status_menue_style}} 
                value={this.state.button_values[i]}
                name="salestatuse"
                onClick={(e)=>{
                    this.props.sendvaluetostate(e) 
                } 
            }  
            >    
            
            </button>
            
            <p style={{margin:"0"}}>
            
            {value}
            
            </p>
            
            
            </div>
            )
        })
        
        return(
            
            
            <div style={{width:"263px",height:"444px",position:"absolute"
            ,zIndex:"10000",background:"white"
            ,top:"83%",left:"0%"}} className="shadow-sm">
            
            <div style={{background:"gray"}} 
            className="d-flex justify-content-between">
            
            <p>
            
            
            statuse
            
            
            </p>
            
            
            </div>
            
            <div>
            
            {buttons}
            
            </div>
            
            </div>
            
            
            
            
            )
            
            
        }
        
    }

    let status_menue_style={
        border: "1px solid red",
        borderRadius:"50%",
        width:"52px",
        height: "52px",
        background:"white",
        marginTop:"20px"
        }

        export default StatusMenu;
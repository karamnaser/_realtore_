import React from 'react';
class StatusBtn extends React.Component{
    constructor(props){

        super(props)

    }


    render(){

       
        return(

        <div id="status-menu"
             className="menue" 
             
        >
            

            <button style={{...status_btn_style}} 
                    onClick={()=>{this.props.make_list_active(4)}}>

                status

           
            </button>

        </div>

        )
    }

}
let status_btn_style={
    border:"1px solid gray",
    borderRadius:"3px",
    background:"white"
}


export default StatusBtn;
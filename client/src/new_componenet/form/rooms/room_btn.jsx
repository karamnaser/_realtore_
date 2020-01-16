import React from 'react'

class RoomBtn extends React.Component{
    constructor(props){
        super(props)

    }


    render(){
      
        return(
            <div id="propert-menu"
                 className="menue" 
                 
            >
                
            <button style={{...propert_btn_style}} 
                    onClick={()=>{this.props.make_list_active(2)}}
            >

                numofrooms

                
            </button>
       </div>

        )
    }
}
export default RoomBtn;

let propert_btn_style={
    border:"1px solid gray",
    borderRadius:"3px",
    background:"white"
}


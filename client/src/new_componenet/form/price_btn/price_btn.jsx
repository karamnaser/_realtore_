import React from 'react'
class Price_btn extends React.Component{
    constructor(props){
        super(props);
        this.state={
             
        }
    }


    render(){

        return(
            <div id="price-menu"
                 className="menue" 
                 >

                <div>

                        <button style={{...price_btn_style}}
                                value="price"
                                onClick={()=>this.props.make_list_active(1)}>

                                Price

                        </button>

                </div>
            

            </div>
        )
    }

}


let price_btn_style={

    border:"1px solid gray",

    borderRadius:"3px",

    background:"white",

    margin:"0 5px"
    
}



export default Price_btn;
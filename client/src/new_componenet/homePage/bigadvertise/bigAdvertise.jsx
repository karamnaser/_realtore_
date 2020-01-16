import React from 'react'
import houseimg from '../../../images/realtor.png'
import { reverse } from 'dns'

class BigAdvertise extends React.Component{

    render(){
        let imgrevers=this.props.imgrevers;
       let img_position= imgrevers ? {display:"flex",flexDirection:"row-reverse"} :  {display:"flex"}

        return(

            <div className="bigadvertise"
                 style={img_position}>

    
            <div className="bigadvertise-img" 
                 style={{width:"50%"}}>

                <img src={houseimg} width={"100%"}/>

            </div>

            <div className="bigadvirtise-paragraph"
                 style={{textAlign: "left",margin:"auto 10px"}} >


                <div>

                <p>Need a home loan? Get pre-approved</p>

                <p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>

                </div>
                {
                    this.props.searchbar 
                    
                    ?

                    <div style={{display:"flex"}}>
        
                        <div>
        
                            <input id="search-input"
                                   style={{...input_style,width:"201px",height:"36px"}} 
                                   type="text"/>
        
                        </div>
        
                        <div style={{width:"40px", height:"36px"}}>
        
                                <button style={btn_style}>
        
                                        search
        
                                </button>
        
                        </div>
        
                    </div>
                    
                :   
                
                    <div>

                        <button style={{...btnstyle}}>Get Pre-Approved</button>

                    </div>
                }

            </div>
            

        </div>
       


        )


    }


}

let btnstyle={

    border: "1px solid red",

    borderRadius: "25px",

    background: "white",

}

let input_style={
    border:"1px solid gray",

    borderTopLeftRadius:"2px",

    borderBottomLeftRadius:"2px"

}

let btn_style={

    height:"100%",

    background:"red",

    border:"1px solid gray",

    borderTopRightRadius:"2px",

    borderBottomRightRadius:"2px"

}


export default BigAdvertise;
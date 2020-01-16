import React from 'react'


class PriceMenue extends React.Component{
    constructor(props){

        super(props)


    }

    setbottonvalue=()=>{

        let text_input = document.getElementsByName("price")[0];

        let btn = document.getElementsByName("price")[1]

        btn.value = text_input.value;

   }

    render(){


        return (


            <div style={{...price_menue_style,position:"absolute"}} 
                     className="price-menue shadow-sm">


                    <div style={{textAlign:"left",background:"gray"}}>

                            <p style={{margin:"0px",marginBottom:"20px"}}>

                                    Price range

                            </p>

                    </div>



                <div style={{display:"flex"}}>

                    <input name="price" type="text"/>

                </div>

    

                <div style={{textAlign:"center",margin:"10px"}}>

                    <button name="price"
                            onClick={(e)=>{
                                
                                this.setbottonvalue()
                                this.props.sendvaluetostate(e)
                                           
                    
                            }}>
                       

                        done


                    </button>

                </div>

            </div>



        )


    }


}

let price_menue_style={

    zIndex:"10000",

    background:"white",

    top:"83%",

    left:"11%",

    textAlign:"right"

}

export default PriceMenue;
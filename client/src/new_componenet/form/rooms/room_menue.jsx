import React from 'react'


class RoomMenu extends React.Component{


    constructor(props){



        super(props);

        this.state= {
            activelist:false,
            button_values:[1,2,3,4,5,6]
        }

    }

    render(){

        let buttons=this.state.button_values.map((value)=>{
            return(
                <div style={{alignItems:"center"}} className="radio d-flex">

                <button style={{...propert_menu_style}} 
                        value={value}
                        name="roomnumber"
                        onClick={(e)=>{
                                        this.props.sendvaluetostate(e) 
                                       } 
                                }  
                >

                    rooms

                </button>

                <p>

                    {value}

                </p>

                </div>
            )
        })



        return(


            
            <div style={{width:"263px",height:"444px",position:"absolute",
                         zIndex:"10000",background:"white"}}
                 className="roommenu shadow-sm">


      <div style={{background:"gray"}} className="col-12 d-flex justify-content-between">

          <p>

              property

          </p>


      </div>

      <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>

      {buttons}

      </div>

  </div>



        )


    }

}

let propert_menu_style={
    border: "1px solid red",
    borderRadius:"50%",
    width:"64px",
    height: "64px",
    background:"white",
    margin:"10px"
}

export default RoomMenu;
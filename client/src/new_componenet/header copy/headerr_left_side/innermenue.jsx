import React from 'react';
class InnerMenue extends React.Component{

    constructor(props){

        super(props)

        this.state={

            iteams:this.props.iteam

        };

    }

    render(){

        
            let Innermenuelist=this.state.iteams.map((iteam)=>{

            
                return(
                    <ul>
                    {
                        iteam.map((obj)=>{
                        return(

                                <li style={{margin:"20px 0px"}} 
                                    className="inneriteam">

                                        <a href={obj["href"]}>{obj["title"]}

                                         </a>


                                </li>)
                                        }
                                )
                   }
                        
                
                    </ul>
                    )
                    });
                    
                    return (

                        <div style={{...style}} 
                        className="inneriteam-list shadow-sm bg-white w-100">

                                {Innermenuelist}

                        </div>

                        )
                        
                        
                    }
                } 
                
                export default  InnerMenue;
                
                
                let style={
                    display:"flex",
                    flexDirection:"row",
                    position:"absolute",
                    top:"80px",left:"0",
                    margin:"0",
                    zIndex:"999",
                    justifyContent:"space-around"
                };  
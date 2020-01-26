import React from 'react'

class FooterList extends React.Component{

render(){


    return(

        <div className="container footerlist" 
             style={{display:"flex",margin:"64px auto",justifyContent:"space-between"}}>

                    
        {
            
            this.props.list_iteams.map((iteam)=>{


            return(
                <div style={{textAlign:"left",width:"25%"}}>
                     {iteam["img"] ?<img  src={iteam["img"]} width="20%"/>

                           :

                    <p>{iteam["title"]}</p>

                  }

                    <ul style={{listStyle:"none",textAlign:"left",padding:"0px"}}>

                        {iteam["inneriteam"].map((listiteam)=>{


                                return(


                                    <li className="footerlist-iteam"><a href="/">{listiteam}</a></li>


                                )

                        })}

                     </ul>

                </div>
            )



        })}

    </div>


    )

}


}

export  default  FooterList;
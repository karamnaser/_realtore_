import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class BigAdvertise extends React.Component{

    render(){
        let imgrevers=this.props.imgrevers;
       let img_position= imgrevers ? {display:"flex",flexDirection:"row-reverse"} :  {display:"flex"}

        return(

            <div className="bigadvertise"
                 style={img_position}>

                <iframe className="ifram col-lg-6 col-sm-12" width="560" height="500" 
                        src="https://www.youtube.com/embed/Aa3mmPRuiZY" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
               

            <div className="bigadvirtise-paragraph col-lg-6 col-sm-12"
                 style={{textAlign: "left",margin:"auto 10px"}} >


                <div>

                <h1>About realtor.com®</h1>

                <p>
                    For years, millions of home shoppers have turned to 
                    realtor.com® to find their dream home. Operated by
                </p>
                <p>
                  Move, Inc., realtor.com® offers a comprehensive 
                  list of for-sale properties, as well as the 
                  information and
                </p>
                <p>
                tools to make informed real estate decisions.Today, 
                more than ever,
                realtor.com® is The Home of Home Search℠.
                </p>
                <p>
                Realtor.com® also offers homeowners 
                a bevy of useful tools and resources through the My Home℠
                </p>
                <p>
                dashboard. My Home℠ dashboard allows property owners to manage their home like 
                the important investment it is by tracking their home’s value over time, 
                researching and managing home improvements, 
                and scouting other similar properties in the neighborhood.
                </p>
                
                </div>
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
import React from 'react'
import BigImgSection from './bigImgSection/bigImgSection'
import HomePageGallary from './homepagegallary'
import HomePageStatistic from './hompagestatistic/homepagestatistics'
import  FooterList from './footerlists/footerlist'
import  BigAdvertise from './bigadvertise/bigAdvertise'
import './homepage.css'
 
class HomePage extends  React.Component{
     constructor(props){

        super(props);

        this.state={

            iteam:[]

        }

     }

     componentDidMount(){

        this.getDatafromServer();

     }


      getDatafromServer = () => {

    

        fetch(` https://storage.googleapis.com/realtour/apartments-rt.json`, {
              method: 'GET',
        }
    
        ).then(response => response.json()
    
        ).then(success => {
    
            this.setState({
    
               iteam : success,
    
        })
    
        }
    
        ).catch(error => console.log(error))
    
    
        };


     
      
    

    render(){
       
        return(
            <div>

                <div style={{display:"flex",justifyContent:"center"}}>

                    <div>
                        
                        <p>Be Ready to Buy... How Much Can You Borrow?</p>

                    </div>

                    <div>

                        <button style={btnstyle}>Get Pre-Approved</button>

                    </div>

                </div>

                <BigImgSection/>

                <div className="container">

                    <HomePageGallary items={this.state.iteam.slice(0,3)}
                                     gotfooter={true}/>

                </div>
                
                <HomePageStatistic/>


                < BigAdvertise imgrevers={false}/>

                < BigAdvertise searchbar={true} imgrevers={true}/>

                < FooterList list_iteams={list_iteams}/>

                < FooterList list_iteams={list_iteams}/>


                <div>


                    <div>



                    </div>


                    <div>



                    </div>


                </div>

            </div>
        )

}
}

let list_iteams=[{img:"http://rentinbemidji.com/wp-content/uploads/2016/08/realtor-logo.png",inneriteam: [

    "Find out how the NAR works for consumers and REALTORS®"

    ]
},{title:"Learn About N.A.R",inneriteam: [

    "About NAR","Agent vs. REALTOR®","Find an Appraiser","Commercial Services","NAR Global Alliances"

    ]
    
}
,{title:"For Homeowners",inneriteam:[

"Why Use a REALTOR® with the SRES?","Sell a Home: Step-by-Step","Real Estate Today Radio","REALTORS® Relief Foundation"
]

},{title:"For REALTORS®",inneriteam:[

"Own your brand online with .realtor & .realestate domains","Attend the REALTORS® Annual Conference & Expo in San Francisco","REALTOR Benefits® Program","Center for REALTOR® Development"
]

}
]

let btnstyle={

    border: "1px solid red",

    borderRadius: "25px",

    background: "white",

    margin: "0 10px"

}
export default HomePage;
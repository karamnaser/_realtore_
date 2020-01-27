import React from 'react'
import BigImgSection from './bigImgSection/bigImgSection'
import HomePageGallary from './homepagegallary'
import HomePageStatistic from './hompagestatistic/homepagestatistics'
import  FooterList from './footerlists/footerlist'
import {getapartments} from '../../server/api'
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

        getapartments().then(apartment=>{
            this.setState({
                iteam:apartment
            })
        });

     }
    

    render(){
       
        return(
            <div>

                <div style={{display:"flex",justifyContent:"center",margin: "20px 16px"}}>

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
                
                < BigAdvertise imgrevers={false}/>
                < BigAdvertise searchbar={true} imgrevers={true}/>

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

let btnstyle={

    border: "1px solid red",

    borderRadius: "25px",

    background: "white",

    margin: "0 10px"

}
export default HomePage;
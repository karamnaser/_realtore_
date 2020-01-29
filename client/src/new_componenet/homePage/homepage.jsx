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
            iteam:[],
            salestatuse:"",
            searchparams:{},
            query:""

        }

     }

     componentDidMount(){

        getapartments(this.state.query).then(apartment=>{
            this.setState({
                iteam:apartment
            })
        });

     }

     handleData({target:{name,value}},state){
         console.log("hadledata");
         console.log(state);
        let query="";
        
        this.state.searchparams[name]=value
        for(let searchparam in this.state.searchparams){    
            query+=searchparam+"="+this.state.searchparams[searchparam]+"&"
        console.log("getbuttonvalue",query)
    }
    getapartments(query).then(apartments_arr=>{
        this.setState({iteam:apartments_arr},()=>{
            console.log("searchparams",window.location.search)
        })
    }).catch(error=>console.log(error));
    
     }

    render(){
       
        return(
            <div>

                <div style={{display:"flex",justifyContent:"center",margin: "20px 16px"}}>

                    <div>
                        
                        <p>Be Ready to Buy... How Much Can You Borrow?</p>

                    </div>

                    <div>

                        <button style={btnstyle} disabled>Get Pre-Approved</button>

                    </div>

                </div>

                <BigImgSection handleData={(e)=>this.handleData(e,this.state)}/>

                <div className="container">

                    <HomePageGallary items={this.state.iteam.slice(0,3)}
                                     gotfooter={true}/>

                </div>

                < BigAdvertise imgrevers={false}/>
                
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
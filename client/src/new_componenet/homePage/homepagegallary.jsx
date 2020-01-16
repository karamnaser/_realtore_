import React from 'react';
import GallarymenDetails from '../gallary/gallarydetails.jsx';
import GallaryImg from '../gallary/gallary_img.jsx';
import '../img.css';
import '../paragraphs.css';
import {Link} from "react-router-dom";
import Heart from '../gallary/heart'


class HomePageGallary extends React.Component{
    constructor(props){
        super(props);

    }
 
    
    render(){

        function display_heart_on_hover(event) {

            let target_elemnt=event.target;

                target_elemnt.style.opacity="1";
                
        }

        function disaple_heart_on_leave(event) {

            let target_elemnt=event.target;

                target_elemnt.style.opacity="0";

        }
        

        function getapartmentDiscreption(aprtment){

            var apartment_discription="";

            if(aprtment["number_of_beds"]){

                var apartments_bed=aprtment["number_of_beds"]+" beds ";
                apartment_discription+=apartments_bed;

            }
        
            if(aprtment["number_of_rooms"]){

                var apartments_rooms=aprtment["number_of_rooms"]+" room ";
                apartment_discription+=apartments_rooms;

            }
        
            if(aprtment["sqft"]){

                var apartments_size=aprtment["sqft"]+" sqft"+"\n";
                apartment_discription+=apartments_size;

            }
        
            if(aprtment["address"]){

                var apartments_addres=aprtment["address"];
                apartment_discription+= apartments_addres;

            }
        
            return apartment_discription;
            
        }
        
       
        let gallery_got_footer=this.props.gotfooter;

        let iteam_div = this.props.items.map((iteam,i) => {

            return ( 

                        <div key={iteam["id"]} 
                             className="homepagegallary col-lg-4 col-sm-12 position-relative"
                             apartment-id={i}
                        >
                            <Link to={"apartment/"+iteam["id"]}>
                                <div style={{boxShadow:"0px 0px 0px 1px"}} className="shadow-div">
                                

                                        <GallarymenDetails header={iteam["title"]}/>

                                        <GallaryImg src={require("../apartments/"+iteam["main_image"])}/>

                                        {
                                            gallery_got_footer

                                                 &&

                                        <GallarymenDetails header={getapartmentDiscreption(iteam)}/>


                                        }
                                        <Heart onMouseOver={display_heart_on_hover.bind(this)}
                                               onMouseLeave={disaple_heart_on_leave.bind(this)}/>


                                        <p className="apartments-price">{iteam["price"] &&"$"+iteam["price"]}</p> 
                                        

                                </div>

                                </Link>
                        
                        </div>

                   
        )});

        return(  
                    <div className="row"
                          style={{margin : "50px 0px"}}>

                        {iteam_div}

                    </div>
                    
            )
    }
    
}

export default HomePageGallary;
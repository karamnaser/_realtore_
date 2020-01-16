import React from 'react';
import GallarymenDetails from './gallarydetails.jsx';
import GallaryImg from './gallary_img.jsx';
import '../img.css';
import '../paragraphs.css';
import Heart from './heart'
import {Link} from "react-router-dom";


class Gallary extends React.Component{
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

        

        let iteam_div = this.props.items.map((item,i) => {
            return ( 

                        <div key={item["id"]} 
                             className="apartments-gallary col-lg-3 col-md-6 col-sm-12 position-relative"
                             apartment-id={i}
                        >
                            <Link to={`/apartment/${item["apatrmentid"]}`}>
                                <div style={{boxShadow:"0px 0px 0px 1px"}} className="shadow-div">
                                

                                        <GallarymenDetails header={item[this.props.title]}/>

                                        <GallaryImg src={`http://localhost:5000/${item["main_image"]}`}/>

                                        {
                                            gallery_got_footer

                                                 &&

                                        <GallarymenDetails header={getapartmentDiscreption(item)}/>


                                        }
                                        <Heart onMouseOver={display_heart_on_hover.bind(this)}
                                               onMouseLeave={disaple_heart_on_leave.bind(this)}/>


                                        <p className="apartments-price">{item["price"] &&"$"+item["price"]}</p> 
                                        

                                </div>

                                </Link>
                        
                        </div>

                   
        )});

        return(  

                <div className="container">
                    <div className="row">

                        {iteam_div}

                    </div>
                </div>    
            )
    }
    
}

export default Gallary;
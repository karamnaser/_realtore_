import React from 'react'
import GallarymenDetails from '../gallary/gallarydetails';
import GallaryImg from '../gallary/gallary_img';
import Heart from '../gallary/heart'
import './apartment.css'
import rightarrowicon from '../../icons/right-arrow.png'
import leftarrowicon from '../../icons/left-arrow.png'
import '../form/serachpagemobile.css'

 class SinglePageApartment extends React.Component{
    constructor(props){

    super(props)

    const pathway=window.location.pathname

    this.state={

    apartments: [] ,

    id : parseInt(pathway.slice(pathway.length-1))-1,

    index : 0 ,

    target : document.getElementsByClassName("apartments-imges")

    }
  }


  componentDidMount(){

    fetch(`https://storage.googleapis.com/realtour/apartments-rt.json`, {
      method: 'GET',
}

).then(response => response.json()

).then(success => {

    this.setState({

        apartments : success

        

}, ()=>console.log(this.state.apartments[this.state.id+1]["address"]))

}

).catch(error => console.log(error))


};


display_heart_on_hover(event) {

  let target_elemnt=event.target;

      target_elemnt.style.opacity="1";
      
}

disaple_heart_on_leave(event) {

  let target_elemnt=event.target;

      target_elemnt.style.opacity="0";

}
getapartmentDiscreption(aprtment){

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
      apartment_discription+= apartments_addres

  }

  return apartment_discription;
  
}


    render(){

    return (

     
        
        <div  className="apartment  position-relative w-50">

              {this.state.apartments.length>0 ?

              <div style={{boxShadow:"0px 0px 0px 1px"}} className="shadow-div">

                    <GallarymenDetails header={this.state.apartments[this.state.id]["title"]}/>

                    <GallaryImg src={require("../apartments/"+this.state.apartments[this.state.id]["main_image"])}/>

                        
                   <GallarymenDetails header={this.getapartmentDiscreption(this.state.apartments[this.state.id])}/>


                   <Heart onMouseOver={this.display_heart_on_hover.bind(this)}
                          onMouseLeave={this.disaple_heart_on_leave.bind(this)}/>


                    <p className="apartment-price">{this.state.apartments[this.state.id]["price"] &&"$"+this.state.apartments[this.state.id]["price"]}</p>


                    
                    {this.state.apartments[this.state.id]["images"].map((iteam,i)=>{

                        return(

                                 <div className="img-wraper position-absolute">
                                

                                        <img className="apartments-imges" src={require("../apartments/"+iteam)}/>

            
                                </div>
                                

                             )

                            })
                            }
                            <div id="map-container-google-1" class="z-depth-1-half map-container" style={{height: "500px"}}>
                
                                  <iframe src={`https://maps.google.com/maps?q=${this.state.apartments[this.state.id]["address"]}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0"
                                          style={{border:"0px"}} allowfullscreen></iframe>
                        
                            </div>

                  
                    
                </div>
                :"loading"}

                <button  className="right-arrow" 
                          onClick={()=>{

                            if(this.state.index>this.state.target.length-1){

                              this.state.index=0

                              let counter=0

                              while(counter<=this.state.target.length-1){

                                  this.state.target[counter].style.left="2000px"
                                  counter++

                              }

                              return

                            }
                            
                              this.state.target[this.state.index].style.left="1px"
                              

                            this.state.index++
                          }
                        }> 
                      
         
                        <img src={rightarrowicon}/>
                                     
                                     
                </button>
                    

                <button className="left-arrow" 
                        onClick={()=>{
                                    
                          if(this.state.index>this.state.target.length-1){

                            this.state.index=0

                            let counter=0

                            while(counter<=this.state.target.length-1){

                                this.state.target[counter].style.left="2000px"
                                counter++

                            }

                            return
                          }
                        
                          this.state.target[this.state.index].style.left="1px";

                          this.state.index++
                        }
                      }>  


                        <img src={leftarrowicon}/>

                        

                </button>
                        
         </div>

    )

}
 }
 

export default SinglePageApartment;
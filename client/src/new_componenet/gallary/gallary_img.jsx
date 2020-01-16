import React from 'react';
class GallaryImg extends React.Component{
    render(){
        
        return(

        <div className="Gallary-img">

            <img src={this.props.src}/>

        </div>

        );

    }
}
export default GallaryImg;
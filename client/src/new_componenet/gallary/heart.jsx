import React from 'react';
import hearticon from '../../images/1like.png';
import hearticon2 from '../../images/like.png';
class Heart extends React.Component{
    render(){
        return(
            <div className="heart-img position-absolute">
            <img id="black-heart"  src={hearticon}/>
            <img onMouseOver={(e)=>{this.props.onMouseOver(e)}} 
            onMouseLeave={(e)=>{this.props.onMouseLeave(e)}}
            id="red-heart" className="position-absolute" src={hearticon2}/>
            </div>);
        }
    }
    export default Heart;
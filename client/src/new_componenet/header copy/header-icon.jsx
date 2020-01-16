import React from 'react';
class HeaderIcon extends React.Component{
    render(){
        return (<div onMouseOver={()=>{
        this.props.onmousehover()}} 
        className="header-icon">
        <img src={this.props.icon}/>
        </div>)
    } 
} 
export default HeaderIcon;
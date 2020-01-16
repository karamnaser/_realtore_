import React from 'react';
class GallarymenDetails extends React.Component{
    render(){

        return(
                    <div className="Gallary-header">
                        <p style={{margin:"0px"}}>

                        {this.props.header}

                        </p>

                    </div>

                );
    }
}

export default GallarymenDetails;
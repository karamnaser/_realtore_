import React from 'react';

class NumberBar extends React.Component{
    render(){
        let numberarr=[]
        for(let i=0;i<this.props.apartmentquqntity;i++){
            numberarr.push(i)
        }
        return(
            <div>
                {numberarr.map(number=><button name="page" onClick={(e)=>this.props.handledata(e)} 
                                                value={number+1}>{number+1}
                                        </button>)}
            </div>
        )
    }
}
export default NumberBar;
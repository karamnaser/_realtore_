import React from 'react';
import realtoreicon from '../../../icons/web_R_blue.jpg'
import './iphon_hiddin_box.css';
class IphoneHiddinBoxElemnt extends React.Component{

    constructor(props){

        super(props);

        this.state={

            iphone_box_iteam:this.props.iteam

        };
    }

    render(){

        let hiddin_box_iteams=this.state.iphone_box_iteam.map((iteam)=>{

            let has_link=iteam[2];

                if(has_link){

                    return(

                            <a className="iphone-hiddin-box-link border-bottom-0"
                               href={iteam[1]}>{iteam[0]}
                            </a>

                    )

                }

                else if(!has_link){

                        return(

                            <p>{iteam}</p>

                        )
                }
            
        })

        return[

            <div className="hiddinbox-img-wraper">

                <img width={"100%"} src={realtoreicon}/>

            </div>,

            <div className="iphon-hiddin-box-paragraph">

                {hiddin_box_iteams}

            </div>
            
        ]

    }

}

export default IphoneHiddinBoxElemnt;
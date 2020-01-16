import React from 'react';
import IphoneHiddinBoxElemnt from './iphone_hiddin_box_elemnt';
class IphoneHiddinBox extends React.Component{

    constructor(props){

        super(props)

        this.state={

            box_iteam:[

                
                         [
                             ["Realtor.com® mobile apps","/",true] , ["FIND HOME FOR SELL OR RENT ON"+

                          "IPHONE IPADE ANDROIED","",false]

                         ] , 

                          [
                              ["Realtor.com® Real Estate","",false],["iOS","",true] 

                          , ["Android","/",true]

                          ]
                    ]
        }
    }
    render(){

        let iphon_box_iteams=this.state.box_iteam.map((arr_iteam)=>{

            return(

                    <div className="iphon-hiddin-box-elemnt">

                            <IphoneHiddinBoxElemnt  iteam={arr_iteam}/> 

                    </div>

                    )
    }
    )

        return(

           <div id="iphone-hiddin-box-id" 
                className="iphone-hiddin-box shadow-sm">


                    {iphon_box_iteams}


           </div>

        )
        
    }

}
export default IphoneHiddinBox;
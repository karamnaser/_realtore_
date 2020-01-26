import React from 'react'


class HomePageStatistic extends React.Component{

    render(){

        return(

            <div className="container homepage-statistic"
            style={{textAlign:"left"}}>

              <div style={{marginBottom:"30px"}} > 

                  <p>What's happening in West Palm Beach, FL</p>

              </div>

              <div style={{display:"flex",textAlign: "center",justifyContent: "space-around",margin:"20px 0px"}}>

                  <div>

                      <p>3,866</p>

                      <p>Home for sale</p>

                  </div>

                  <div>

                  <p>3,866</p>

                  <p>Home for sale</p>


                  </div>


                  <div>


                  <p>3,866</p>

                  <p>Home for sale</p>


                  </div>

                  <div>

                  <p>3,866</p>

                  <p>Home for sale</p>
                  

                  </div>
              </div>

       </div>



        )


    }

} 
export default HomePageStatistic;
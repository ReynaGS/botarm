import React from "react"
import SensorCard from "./SensorCard"


function SensorCardContainer(){
    return(
        <div>
        
        <div className="columns">
            <div className="column">
                <SensorCard/>
                           
  </div>
            <div className="column">
                    <SensorCard />
  </div>
            <div className="column">
                    <SensorCard />
  </div>
            <div className="column">
                    <SensorCard />
  </div>
        </div>

        
        </div>





    )
}
export default SensorCardContainer; 


          
    
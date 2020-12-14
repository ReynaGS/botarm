import React from "react"
import SensorCard from "./SensorCard"
import { useStoreContext } from "../utils/GlobalState"

function SensorCardContainer(){
    const [state, dispatch] = useStoreContext();
    console.log(state)
    // const sensorsCard = state.sensorConfiguration.sensorStateConfig.map((sensor)=>{
    //     return (<div className="column">
    
    //         <SensorCard />

    //     </div>)
        

    // })
    return(
        <div>
        
        <div className="columns">

            {/* {sensorsCard}  */}
               
                
        </div>

        
        </div>





    )
}
export default SensorCardContainer; 


          
    
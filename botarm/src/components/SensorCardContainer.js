import React from "react"
import SensorCard from "./SensorCard"
import { useStoreContext } from "../utils/GlobalState"

function SensorCardContainer(){
    const [state, dispatch] = useStoreContext();
    console.log(state)
    const sensorsCard = state.sensorConfiguration.sensorStateConfig.map((sensor)=>{
        return (<div className="column">
    
            <SensorCard config= {sensor}/>

        </div>)
        

    })
    return(
        <div>
        
        <div className="columns">

            {state.sensorConfiguration.sensorStateConfig.length == 0 ? <h3>Please Go to Sensor Settings</h3>
            :sensorsCard} 
            

               
                
        </div>

        
        </div>





    )
}
export default SensorCardContainer; 


          
    
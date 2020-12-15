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
    function newSettingsConfig(){
        return (
            <div className="column">
                <h2>Please go to <a href="/settings">Settings</a></h2>
            </div>
        )
    }
    return(
        <div>
        
        <div className="columns">

            {state.sensorConfiguration.sensorStateConfig.length == 0 ?
             newSettingsConfig()
            :sensorsCard} 
                   
        </div>

        
        </div>





    )
}
export default SensorCardContainer; 


          
    
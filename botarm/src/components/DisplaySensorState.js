import React from "react"; 
import { useStoreContext } from "../utils/GlobalState";


function DisplaySensorState (){
    const [state, dispatch] = useStoreContext();
    const statusColor = state.sensorStatus == 0 ? { color: "purple" } : { color: "red" }
    var status = state.sensorStatus == 0 ? "Closed":"Open"; 
    return (
        <div> 
            <span style={statusColor} >The door is currently : {status} </span>
        </div>
    )
}

export default DisplaySensorState; 
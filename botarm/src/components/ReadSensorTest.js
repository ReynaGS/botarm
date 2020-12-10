import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API"
import { READ_SENSOR, SET_SENSOR_DATA } from "../utils/actions";

function ReadSensorTest(){
    const [state, dispatch] = useStoreContext();
    const handleOnClick = async ()=>  {
        // console.log("probando on click")
        const results = await API.getSensor()
        console.log(results);
         dispatch({
             action: SET_SENSOR_DATA,
             sensorStatus: results.data[0].state
        });

    }
    return(
        <div style= {{margin:"25px"}}>
        <button className="btn btn-success mt-3 mb-5" onClick= {handleOnClick}>
            Read Sensor State
        </button>
        </div>
    )
}
export default ReadSensorTest
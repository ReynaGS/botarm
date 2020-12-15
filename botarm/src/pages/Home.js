import React,{useEffect} from "react"; 
import SensorCardContainer from "../components/SensorCardContainer"; 
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API"
import { SET_SENSOR_CONFIGURATION} from "../utils/actions"


function Home(){
    const [state, dispatch] = useStoreContext();

    
    return(
        <div>
            
            <div style={{ margin: "36px" }}>
                <SensorCardContainer/>
            </div>

        
        </div>
    )
}

export default Home

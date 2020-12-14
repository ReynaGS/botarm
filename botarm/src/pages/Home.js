import React,{useEffect} from "react"; 
import SensorCardContainer from "../components/SensorCardContainer"; 
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API"
import { SET_SENSOR_CONFIGURATION} from "../utils/actions"


function Home(){
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        loadInitial();
        // loadMessage();
    }, [])
    async function loadInitial(){
        console.log("hello from loadInitial")
        console.log(state)
        const {data} = await API.getSensorConfig(state.email)
        console.log(data)
        dispatch({
            action: SET_SENSOR_CONFIGURATION,
            sensorConfiguration: data

        });

    }
    return(
        <div>
            <div style={{margin: "36px"}}>
                
        <button className="button is-large"> Activate System / Disable System </button>
            </div>
            <div style={{ margin: "36px" }}>
                <SensorCardContainer/>
            </div>

        
        </div>
    )
}

export default Home

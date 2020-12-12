import React from "react"; 
import SensorCardContainer from "../components/SensorCardContainer"; 


function Home(){
    return(
        <div>
            <div style={{margin: "36px"}}>
                
        <button className="button is-large"> Activate System / Disable System </button>
            </div>
            <div style={{ margin: "36px" }}>
                <SensorCardContainer />
            </div>

        
        </div>
    )
}

export default Home

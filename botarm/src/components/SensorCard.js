import React from "react"; 
import { useStoreContext } from "../utils/GlobalState";

function SensorCard(props){
  

  const [state, dispatch] = useStoreContext();
  function isOpenOrClose(){ 
    var sensorStatus = state.actualSensorState.find((sensor)=>{
      return sensor.zone == props.config.zoneNumber
    })
    if(sensorStatus == undefined){
      return "Unknown"
    }
    if(sensorStatus.state==0){
      return " Closed "
    }else return " Open "

  }

    return(

    <div className="card">
  <div className="card-image">
                <figure className="image is-3by2">
      <img src="door.jpeg" alt="livingRoom"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        
      </div>
      <div className="media-content">
    <p className="title is-4">{props.config.zoneName}</p>
      </div>
    </div>

    <div className="content">
           {isOpenOrClose()}
      <br/>
     
    </div>
  </div>
            <footer className="card-footer">
                
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Remove</a>
            </footer>
</div>
    )
}

export default SensorCard
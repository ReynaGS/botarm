import React from "react"; 

function SensorCard(){
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
        <p className="title is-4">Front Door Sensor</p>
      </div>
    </div>

    <div className="content">
                The Front Door is Currently : OPEN!
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
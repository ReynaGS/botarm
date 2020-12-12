
import React, {useRef, useState} from "react"; 
import SelectOption from "../components/SelectOption"

const zones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



function SensorSettingForm (){

    const konnectedURL = useRef()
    const contactPhone = useRef()
    const selectZone= useRef()
    const zoneName= useRef()
    const [sensorStateConfig, setSensorConfig] = useState([]);
    const [zonesState, setZonesState] = useState(zones);
    
    const saveHandle = ()=>{
        console.log(konnectedURL.current.value)

    }

    const addSensorHandle = ()=>{
        const sensorInfo = {
            zoneName: zoneName.current.value, 
            zoneNumber: selectZone.current.value
            
        }
       sensorStateConfig.push(sensorInfo);
        let y = sensorStateConfig.map(x => x);
       setSensorConfig(y)
       
    

        const zoneOptFilter = zonesState.filter((zone) => {
            const isInState = y.find((sensorInfo) => {
                return sensorInfo.zoneNumber == zone


            })
            console.log(isInState)
            return isInState == undefined
        })

        setZonesState(zoneOptFilter)
      
    }

    return (
         <div>
            <div class="card">
                <div class="card-content">

                    <div className="field">
                        <label className="label">Konnected Device URL</label>
                        <div className="control has-icons-left has-icons-right">
                            <input ref={konnectedURL} className="input is-success" type="text" placeholder="Konnected URL"  />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>

                    </div>
                    <div className="field">
                        <label className="label">Contact Phone Number</label>
                        <div className="control ">
                            <input ref={contactPhone} className="input is-success" type="tel" placeholder=" My Contact Number"  />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>

                    </div>

                    <div class="card">
                        <div class="card-content">

                        
                                <div class="field">
                                    <div class="control">
                                        <div class="select is-primary">
                                            <select ref= {selectZone}>
                                                {zonesState.map((zone)=>{
                                                    console.log(zone)
                                                    return (<option  value={zone}>Zone: {zone} </option>)

                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            <div className="field">
                                <label className="label">Enter Zone Name</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input ref={zoneName}className="input is-success" type="text" placeholder="Zone Name"  />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span>
                                </div>

                            </div>

                            <div className="control my-2 ">
                                <button className="button is-link is-light " onClick={addSensorHandle}>Add Sensor Zone</button>
                            </div>

                            </div>
                    </div>

                
                    
                        <div className="control mt-4 ">
                            <button className="button is-link is-light " onClick={saveHandle}>Save</button>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SensorSettingForm
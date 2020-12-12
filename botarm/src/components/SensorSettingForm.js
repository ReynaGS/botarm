
import React, {useRef} from "react"; 



function SensorSettingForm (){

    const konnectedURL = useRef()
    const zones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const ZoneOptions = zones.map(function (zone) {
        return (<option>Zone: {zone} </option>)
    })
    const saveHandle = ()=>{
        console.log(konnectedURL)
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
                            <input className="input is-success" type="tel" placeholder=" My Contact Number"  />
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
                                            <select>
                                                {ZoneOptions}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            <div className="field">
                                <label className="label">Enter Zone Name</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-success" type="text" placeholder="Zone Name"  />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span>
                                </div>

                            </div>

                            <div className="control my-2 ">
                                <button className="button is-link is-light ">Add Sensor Zone</button>
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
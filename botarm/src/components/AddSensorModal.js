import React from "react"; 

function AddSensorModal(){
    const zones = [1,2,3,4,5,6,7,8,9,10,11,12]
    const ZoneOptions= zones.map(function(zone){
        return(<option>Zone: {zone} </option>)
    })
    return(
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    
                    <div class="field">
                        <div class="control">
                            <div class="select is-primary">
                                <select>
                                  {ZoneOptions} 
                                </select>
                            </div>
                        </div>
                    </div>
            
    </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
}
export default AddSensorModal
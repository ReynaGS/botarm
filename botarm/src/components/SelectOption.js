import React from "react"; 

function SelectOption (props){
    console.log(props)
    var ZoneOptions = props.zones.map(function (zone) {
        
        return (<option  value={zone}>Zone: {zone} </option>)
    })
    return(
        <div>
        {
            ZoneOptions
        }
        </div>
    )
}

export default SelectOption;


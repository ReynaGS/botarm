import API from "./API"; 

async function smsHelper(state, sensorResponse){
    var to = "18623405838" 
    var text; 
    var sensorStatusSms= sensorResponse.state == 0 ? "Closed": "Open"
    var zoneConfig = state.sensorConfiguration.sensorStateConfig.find((config)=>{
       return config.zoneNumber == sensorResponse.zone 
    }) 
console.log("--------------SMS HELPER------------") 
 console.log(zoneConfig)
 if(zoneConfig != null){
   text = zoneConfig.zoneName + " is " + sensorStatusSms
 }
var r = await API.sendSms({text, to})
console.log(r)
}

export default smsHelper
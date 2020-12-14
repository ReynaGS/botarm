import axios from "axios";

export default {

    // Gets all posts
    getSensor: function () {
        return axios.get("http://23.121.17.11:9123/zone");
    },
    // Create Sensor Settings
    createSettings: function(Settings){
        return axios.post("/api/sensors/",Settings)
    },
    getSensorConfig: function (email){
        console.log(email)
        return axios.post("/api/sensors/one", {email:email})
    },
    sendSms: function(data){
        return axios.post("/api/sms", data)
    }, 
    saveEvent: function(data){
        return axios.post("/api/sensors/save", data)
    }


};

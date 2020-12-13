//conctact sensor properties

// {
// "endpoint_type": "rest",
// "endpoint": "http://192.168.1.64:3001/api/konnected",
// "token": "developers",
// "sensors": [{ "zone": "1" }]
// }

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    url: {
        type: String,
        required: true
    },

    contactPhone: {
        type: String,
        required: true
    },
    sensorStateConfig: {
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },


});


const ContactSensor = mongoose.model("ContactSensor", sensorSchema);

module.exports = ContactSensor;
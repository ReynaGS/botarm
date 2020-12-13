const db = require("../models")

// Defining methods for the sensorController
module.exports = {
    findAll: function (req, res) {
        console.log("testing")
        res.send("Hello World")

    },
    createSensorSettings: async function (req, res) {

        const contactSensor = await db.ContactSensor.create(req.body);
        res.json(contactSensor);

    },
    findOne: async function (req, res) {
        const settings = await db.ContactSensor.findOne({ email });
        if (settings != null) {
            res.json(settings)
        } else {
            res.json({ "found": false })
        }
    }

};
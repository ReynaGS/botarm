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
        const email = req.body.email
        console.log(req.body)
        const settings = await db.ContactSensor.findOne({ email });
        if (settings != null) {
            res.json(settings)
        } else {
            res.json(null)
        }
    },
    saveEvent: async function (req, res) {
        const contactSensor = await db.History.create(req.body);
        res.json(contactSensor);
        // console.log(req.body);
        // res.send("hello");
    },
    getHistory: async function (req, res) {
        const email = req.body.email
        const history = await db.History.find({ email })
        res.json(history);
    }

};
const router = require("express").Router();
const sensorController = require("../../controllers/sensorsController");

router.route("/")
    .get(sensorController.findAll)

    .post(sensorController.createSensorSettings);

module.exports = router;
const router = require("express").Router();
const sensorController = require("../../controllers/sensorsController");
const { findOne } = require("../../models/User");

router.route("/")
    .get(sensorController.findAll)

    .post(sensorController.createSensorSettings);

router.route("/one").post(sensorController.findOne)
router.route("/save").post(sensorController.saveEvent)
module.exports = router;
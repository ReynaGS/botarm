const router = require("express").Router();
const sensorsController = require("../../controllers/sensorsController");
const sensorController = require("../../controllers/sensorsController");
const { findOne } = require("../../models/User");

router.route("/")
    .get(sensorController.findAll)

    .post(sensorController.createSensorSettings);

router.route("/one").post(sensorController.findOne)
router.route("/save").post(sensorController.saveEvent)
router.route("/history").post(sensorController.getHistory)
module.exports = router;
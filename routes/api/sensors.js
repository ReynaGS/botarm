const router = require("express").Router();
const sensorController = require("../../controllers/sensorsController");

router.route("/all")
    .get(sensorController.findAll)
// .post(sensorController.create);

module.exports = router;
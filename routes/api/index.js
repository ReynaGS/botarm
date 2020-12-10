const router = require("express").Router();
const sensorRoutes = require("./sensors");

// Sensor routes
router.use("/sensors", sensorRoutes);

module.exports = router;

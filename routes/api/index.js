const router = require("express").Router();
const sensorRoutes = require("./sensors");

// Sensor routes
router.use("/sensors", sensorRoutes);
router.get("/welcome", (req, res) => {
    res.json({ message: "You have gone full MERN!!!" });
})


module.exports = router;

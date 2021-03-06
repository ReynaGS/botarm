const router = require("express").Router();
const sendSMS = require("../../controllers/sendSMS");
const sensorRoutes = require("./sensors");

// Sensor routes
router.use("/sensors", sensorRoutes);
router.get("/welcome", (req, res) => {
    res.json({ message: "You have gone full MERN!!!" });
});
router.post("/sms", (req, res) => {
    console.log(req.body)
    res.json({ message: "You have gone full MERN!!!" });
    sendSMS.send(req.body.to, "13052787274", req.body.text)

})



module.exports = router;

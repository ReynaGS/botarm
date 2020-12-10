const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

router.use(function (req, res) {
    const rt = path.join(__dirname, "../botarm/build/index.html");
    console.log(rt)
    res.sendFile(rt);
});

module.exports = router;

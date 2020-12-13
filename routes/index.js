const path = require("path");
const router = require("express").Router();
const passport = require("../authentication/passport");
const authRoutes = require("../authentication/authRoutes");
const apiRoutes = require("./api");

//https://reactrouter.com/web/example/auth-workflow
// API Routes
//router.use("/api", apiRoutes);
router.use("/auth", authRoutes)

router.use("/api", passport.authenticate('jwt', { session: false }), apiRoutes)


// If no API routes are hit, send the React app

router.use(function (req, res) {
    const rt = path.join(__dirname, "../botarm/build/index.html");
    console.log(rt)
    res.sendFile(rt);
});

module.exports = router;

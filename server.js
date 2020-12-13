require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

//app.use(passport.initialize());

//const authRoutes = require("./authentication/authRoutes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("botarm/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ba_db");

app.use("/", routes);

// Add routes, both API and view
// app.use(authRoutes);
app.get("/test", function (req, res) {
    console.log("Probando");
    res.send("hello word");
});





// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
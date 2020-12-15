const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const historySchema = new Schema({
    zone: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,

    },
    date: {
        type: String,
        required: true,

    },


});


const History = mongoose.model("History", historySchema);

module.exports = History;
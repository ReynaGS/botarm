import axios from "axios";

export default {
    // Gets all posts
    getSensor: function () {
        return axios.get("http://192.168.1.161:9123/zone");
    }};
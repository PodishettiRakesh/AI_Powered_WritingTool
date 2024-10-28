const express = require("express");
const grammerCheckRoute = express.Router();

grammerCheckRoute.post('/', async(req, res)=>{
    res.json({
        message: "grammer route",
    });
});

module.exports = grammerCheckRoute
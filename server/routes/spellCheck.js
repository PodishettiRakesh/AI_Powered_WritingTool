const express = require("express");
const spellCheckRoute = express.Router();

spellCheckRoute.post('/', async(req, res)=>{
    res.json({
        message: "spell check route",
    });
});

module.exports = spellCheckRoute
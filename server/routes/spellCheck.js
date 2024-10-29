const express = require("express");
const axios= require("axios");
const spellCheckRoute = express.Router();

spellCheckRoute.post('/', async(req, res)=>{
    const text = req.body.text;  // Text input from the client
    
    try {
        const response = await axios.post('https://api.languagetool.org/v2/check', null, {
            params: {
                text: text,
                language: 'en-US'  // Set to the desired language
            }
        });

        const spellErrors = response.data.matches.map(match => ({
            message: match.message,
            suggestions: match.replacements.map(rep => rep.value),
            context: match.context.text
        }));

        res.json({ spellErrors });
    } catch (error) {
        res.status(500).json({ message: "Error checking spelling", error: error.message });
    }
});


module.exports = spellCheckRoute
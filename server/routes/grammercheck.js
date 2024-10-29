const express = require("express");
const axios= require("axios");
const grammerCheckRoute = express.Router();

grammerCheckRoute.post('/', async(req, res)=>{
    const text = req.body.text;  // Text input from the client

    try {
        const response = await axios.post('https://api.languagetool.org/v2/check', null, {
            params: {
                text: text,
                language: 'en-US'  // Set to the desired language
            }
        });

        // Extracting the corrected text
        let correctedText = text;  // Start with the original text
        let offset = 0;  // To keep track of text corrections

        response.data.matches.forEach(match => {
            const replacement = match.replacements[0]?.value || '';  // Get the first suggestion
            const start = match.offset + offset;  // Calculate the start index for replacement
            const end = start + match.length;  // Calculate the end index for replacement

            // Replace the incorrect part with the correct suggestion
            correctedText = correctedText.slice(0, start) + replacement + correctedText.slice(end);
            offset += replacement.length - match.length;  // Adjust the offset for the next replacement
        });

        res.json({ correctedText });
    } catch (error) {
        res.status(500).json({ message: "Error checking grammar", error: error.message });
    }
});

module.exports = grammerCheckRoute
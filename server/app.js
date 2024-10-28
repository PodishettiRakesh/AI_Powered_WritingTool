const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;


//config cors
app.use(cors());
app.use(express.json()); //for parsing application/json

app.listen(PORT, () => {
    console.log(`AI Writing app listening at http://localhost:${PORT}`);
  });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");

const app = express();
const PORT = process.env.PORT || 5000;


//config cors
app.use(cors());
app.use(express.json()); //for parsing application/json

// routes
app.use("/api/analyze", analyzeRoute);

app.listen(PORT, () => {
    console.log(`AI Writing app listening at http://localhost:${PORT}`);
  });
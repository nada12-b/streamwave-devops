const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("🎬 StreamWave API running 
successfully!"));
app.listen(5000, () => console.log("Backend running on port 5000"));


// Import packages
const express = require("express");
const home = require("./routes/home");
const dotenv = require('dotenv').config();


// Middlewares
const app = express();
app.use(express.json());                  

// Routes
app.use("/confirm-pin", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

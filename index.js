// Import packages
const express = require("express");
const home = require("./routes/home");
const blockTransactions = require("./routes/blockTransactions");
const dotenv = require('dotenv').config();


// Middlewares
const app = express();
app.use(express.json());                  

// Routes
app.use("/confirm-pin", home);
app.use("/block-transactions", blockTransactions)


// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

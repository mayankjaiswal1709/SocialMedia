
const express = require("express")
const app = express()
const path = require("path")
require('dotenv').config()

require("./config/db")

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

app.use("/api", require("./routes/userRoute"))

app.listen(8000, () => {
    console.log("port started");
})
const mongoose = require("mongoose")

try {
    mongoose.connect(process.env.DB_URL)
    console.log("database connected");
} catch (error) {
    console.log(error)
}


const express = require('express')

const router = express.Router();
const userModel = require("../models/userModel")
router.get("/", (req, res) => {
    console.log("api working")
    res.send("hello world")
})


router.post("/signup", async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);

        const user = new userModel(req.body);
        await user.save()
        res.status(200).send("User Signup successfully");
    } catch (error) {
        console.log(error)
    }

})

module.exports = router
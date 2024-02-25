const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const User = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/sathi");


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (user) {
        if (user.password === password && user.email === email) {
            res.json("Success")


        } else {
            
            if (user.password !== password) {
                res.json("The password is incorrect")
            }
            else if (user.email !== email) {
                res.json("The emailid is incorrect");

            }
        }
    }
    else {
        res.json("Please register first")

    }

})
app.post('/', async (req, res) => {

    const { fullName, email, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { fullName }] });

    if (user) {
        res.json("User already exists");
    }
    else {
        if(fullName === "" || email === "" || password === ""){
            res.json("Please fill all the fields")
        }
        else{res.json("User Created");
        User.create({ email, fullName, password })}


    }


})

app.listen(3006, () => {
    console.log("server is running")
})
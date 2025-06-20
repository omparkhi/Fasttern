require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { userModel } = require("./models/userModel");
const {signup} = require("./controllers/authControllers")


const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is Running well!");
});

//Route path
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


// app.get("/user", async(req, res) => {
//     const newUser = new userModel({
//         name: "om",
//         email: "om@gmail.com",
//         password: "gfgsdh",
//         role: "seeker"
//     });
//     let saveUser = await newUser.save();
//     console.log(saveUser);
// })

//DB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongodb is connected successfully");

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on the port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });



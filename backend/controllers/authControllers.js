const {userModel} = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        const existingUser = await userModel.findOne({ email });
        if(existingUser) {
            return res.status(400).json({msg:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword, role});
        await newUser.save();

        res.status(201).json({msg:"Signup successfully", userId : newUser._id});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"Signup failed", error: error.message});
    }
};

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({ email });
        if(!user) {
            return res.status(400).json({msg: "User not found"});
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({msg: "Invalid Credential"});
        }

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.json({
            msg: "Login Successfully",
            token,
            id: {id: user._id, name: user.name, role: user.role}
        });
    } catch (error) {
        res.status(500).json({msg: "Login Failed", error: error.message});
    };

};
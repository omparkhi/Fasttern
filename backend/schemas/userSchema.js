const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["seeker", "recruiter"],
        required: true
    }
}, {timestamps: true});

module.exports = { userSchema };
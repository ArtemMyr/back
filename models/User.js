const mongoose = require('mogoose')
const Schema  = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.module('users', userSchema)
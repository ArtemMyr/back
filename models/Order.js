const mongoose = require('mogoose')
const Schema  = mongoose.Schema

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        require: true
    },
    list: [
        {
            name: {
                type: String
            },
            quntity: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.module('orders', orderSchema)
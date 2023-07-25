const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    orderItems: [
        {
            name: {
                type: String,
                require: true,
            },
            qty: {
                type: Number
            },
            image: {
                type: String
            },
            price: {
                type: Number
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: "Product",
            }
        }
    ],
    shippingAddress: {
        address: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        postalCode: {
            type: String, require: true,
        },
        country: {
            type: Number,
            require: true,
        },
    },
    paymentMethod: {
        type: String, require: true,
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        updated_time: { type: String },
        email_address: { type: String }
    },
    itemsPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    tavPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    }
})

const ORDER = mongoose.model("ORDER", orderSchema)
module.exports = ORDER
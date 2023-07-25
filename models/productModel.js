const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        require: true,
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    },
})

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    title: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String
    },
    discountPercentage: {
        type: String,
    },
    rating: {
        type: Number
    },
    thumbnail: {
        type: String,
    },
    stock: {
        type: String,
    },
    brand: {
        type: String, require: true,
    },
    category: {
        type: String,
        require: true,
    },
    reviews: [reviewSchema],
})

const PRODUCT = mongoose.model('PRODUCT', productSchema)
module.exports = PRODUCT
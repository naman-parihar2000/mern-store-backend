const PRODUCT = require('../models/productModel')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await PRODUCT.find()
        res.json({
            status: 'success',
            products
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 400,
            data: []
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const product = await PRODUCT.findById(req.params.id)
        res.json({
            status: 'success',
            product,
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 400,
            data: []
        })
    }
}
const jwt = require('jsonwebtoken')
const USER = require('../models/userModel')

const protect = async (req, res, next) => {
    let token
    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, 'secretKey')
            req.user = await USER.findById(decoded.userId).select('-password')
            next()
        } catch (err) {
            console.log(err)
            res.json({
                message: "not authorized, token Failed"
            })
        }
    }
    else {
        res.json({
            message: "not authorized, no token"
        })
    }
}

const adminProtect = async (req, res, next) => {

    if (req.user && req.user.isAdmin) {
        next()
    }
    else {
        res.json({
            message: "not authorized as admin"
        })
    }

}

module.exports = { adminProtect, protect }
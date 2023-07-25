const USER = require('../models/userModel')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

exports.authUser = async (req, res) => {
    const { email, password } = req.body

    const user = await USER.findOne({ email });

    const secretKey = crypto.randomBytes(64).toString('hex');

    if (user && (await user.matchPassword(password))) {

        const token = jwt.sign({ userId: user.id }, secretKey, {
            expiresIn: '30d'
        })

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
        })

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401).json({ error: "Invalid email or password" });
    }
}

exports.registerUser = async (req, res) => {
    res.send('register user')
}

exports.logoutUser = async (req, res) => {
    res.send('logout user')
}

exports.getUserProfile = async (req, res) => {
    res.send('user profile')
}

exports.updateUserProfile = async (req, res) => {
    res.send('update user profile')
}

exports.getUsers = async (req, res) => {
    res.send('get Users')
}
exports.getUsersByID = async (req, res) => {
    res.send('get User by ID')
}

exports.deleteUser = async (req, res) => {
    res.send('delete User')
}

exports.updateUser = async (req, res) => {
    res.send('delete Users')
}
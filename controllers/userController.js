const USER = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function generateToken(res, userId) {

    const token = jwt.sign({ userId }, "secretKey", {
        expiresIn: "30d"
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 2 * 60 * 1000
    })

}

exports.authUser = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await USER.findOne({ email })

        if (user && bcrypt.compare(password, user.password)) {

            generateToken(res, user._id)
 
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
            })
        }
        else {
            res.json({
                message: "Invalid Email Or Password"
            })
        }
    }
    catch (err) {
        res.json({ error: err })
    }

}

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ error: err })
    }
}

exports.logoutUser = async (req, res) => {
    res.cookie('jwt', "", {
        httpOnly: true,
        expires: new Date(0)
    })
    res.json({
        message: "User Logged Out"
    })
}

exports.registerUser = async (req, res) => {
    try {
        const { email, password, name } = req.body

        const userExists = await USER.findOne({ email })

        if (userExists) {
            res.status(400).json({
                message: "Email already in use"
            })
        }

        const salt = await bcrypt.genSalt(12)
        const encPassword = await bcrypt.hash(password, salt)

        const user = await USER.create({
            name,
            email,
            password: encPassword
        })

        if (user) {

            generateToken(res, user._id)

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            })
        }

    } catch (err) {
        res.json({ error: err })
    }
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
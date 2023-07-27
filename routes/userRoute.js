const express = require('express')
const { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUsersByID, updateUser } = require('../controllers/userController')
const { protect, adminProtect } = require('../middleware/authMiddleware')

const router = express.Router()

router
    .route('/')
    .post(registerUser)
    .get(protect, adminProtect, getUsers)

router.post('/login', authUser)

router.post('/logout', logoutUser)

router.post('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

router
    .route('/:id')
    .delete(protect, adminProtect, deleteUser)
    .get(protect, adminProtect, getUsersByID)
    .put(protect, adminProtect, updateUser)


module.exports = router
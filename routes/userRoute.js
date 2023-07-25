const express = require('express')
const { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUsersByID, updateUser } = require('../controllers/userController')

const router = express.Router()

router
    .route('/')
    .post(registerUser)
    .get(getUsers)

router.post('/logout', logoutUser)

router.post('/login', authUser)

router.post('/profile').get(getUserProfile).put(updateUserProfile)

router
    .route('/:id')
    .delete(deleteUser)
    .get(getUsersByID)
    .put(updateUser)


module.exports = router
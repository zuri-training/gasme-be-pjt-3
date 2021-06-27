const express = require('express')
const userController = require('../controllers/userController')
const {requireLogin} = require('../middleware/auth')

const router = express.Router()

  
router
    .route('/:id')
    .get(userController.getUser)
    .delete(requireLogin, userController.deleteUser)

router
    .patch(
        '/update',
        requireLogin,
        userController.updateUser
    )

router
    .patch(
        '/update/photo',
        requireLogin,
        userController.uploadPhoto,
        userController.uploadPhotoToGoogleDrive,
    )


module.exports = router;

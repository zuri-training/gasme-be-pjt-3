const express = require('express')
const notificationController = require('../controllers/notificationController')
const {requireLogin} = require('../middleware/auth')

const router = express.Router()

router
    .route('/')
    .get(requireLogin, notificationController.getAll)


module.exports = router
const express = require('express')
const notificationController = require('../controllers/notificationController')
const {requireLogin} = require('../middleware/auth')

const router = express.Router()

router.get('/consumer', requireLogin, notificationController.getConsumerNotifications);
router.get('/vendor', requireLogin, notificationController.getVendorNotifications);


module.exports = router
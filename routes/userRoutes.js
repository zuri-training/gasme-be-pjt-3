const express = require('express')
const userController = require('../controllers/userController')
const {requireLogin} = require('../middleware/auth');

const router = express.Router()

  
router
    .route('/:id')
    .get(userController.getUser)
    .delete(requireLogin, userController.deleteUser)

router.put('/update', requireLogin, userController.updateUser);


module.exports = router;

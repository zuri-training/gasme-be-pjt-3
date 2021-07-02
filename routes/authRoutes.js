const {Router} = require('express');
const authController = require('../controllers/authController');
const {validate} = require('../middleware/formsAndInput');
const {requireLogin} = require('../middleware/auth')

// Initialize router
const router = Router();

router.post('/signup', validate('signup'), authController.signUp);
router.post('/login', validate('login'), authController.login);
router.post('/logout', requireLogin, authController.logout);


module.exports = router;
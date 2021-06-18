const {Router} = require('express');
const authController = require('../controllers/authController');
const {validate} = require('../middleware/formsAndInput');

// Initialize router
const router = Router();


router.post('/signup', validate('signup'), authController.signUp);
router.post('/login', validate('login'), authController.login);

module.exports = router;
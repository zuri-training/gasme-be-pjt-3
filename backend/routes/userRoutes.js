const {Router} = require('express');
const userControllers = require('../controllers/userControllers');

// Initialize router
const router = Router();


router.post('/create', userControllers.signUp);

module.exports = router;
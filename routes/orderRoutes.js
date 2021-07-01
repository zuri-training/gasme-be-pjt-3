const {Router} = require('express');
const {requireLogin} = require('../middleware/auth');
const {validate} = require('../middleware/formsAndInput');
const orderControllers = require('../controllers/orderController');

// Initialize router
const router = Router();

router.post('/create', validate('createOrder'), requireLogin, orderControllers.createOrder);
router.get('/get/consumer', requireLogin, orderControllers.getConsumerOrders);
router.get('/get/vendor', requireLogin, orderControllers.getVendorOrders);
router.patch('/accept', validate('acceptOrder'), requireLogin, orderControllers.acceptOrder);
router.patch('/reject', validate('acceptOrder'), requireLogin, orderControllers.rejectOrder);
router.patch('/complete', validate('acceptOrder'), requireLogin, orderControllers.completeOrder);
router.patch('/cancel', validate('acceptOrder'), requireLogin, orderControllers.cancelOrder);


module.exports = router;
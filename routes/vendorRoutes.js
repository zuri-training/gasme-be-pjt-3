const {Router} = require('express');
const {
    createVendor,
    getVendors,
    getVendorById,
    updateVendor,
    reviewVendor,
    fetchReviews
} = require('../controllers/vendorController')
const {validate} = require('../middleware/formsAndInput');
const {requireLogin} = require('../middleware/auth');

const router = Router();

router.post('/create', validate('createVendor'), requireLogin, createVendor);
router.post('/get', getVendors);
router.put('/update', requireLogin,  updateVendor);
router.get('/:id', getVendorById);
router.post('/review', validate('reviewVendor'), requireLogin, reviewVendor);
router.post('/review/get', validate('fetchReviews'), fetchReviews);

module.exports = router;
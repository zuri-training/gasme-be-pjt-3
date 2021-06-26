const {Router} = require('express');
const {
    createVendor,
    getVendors,
    getVendorById,
    updateVendor,
    reviewVendor
} = require('../controllers/vendorController')
const {validate} = require('../middleware/formsAndInput');
const {requireLogin} = require('../middleware/auth');

const router = Router();

router.post('/create', requireLogin, validate('createVendor'), createVendor);
router.post('/get', getVendors);
router.put('/update', requireLogin,  updateVendor);
router.get('/:id', getVendorById);
router.post('/review', requireLogin, validate('reviewVendor'), reviewVendor);

module.exports = router;
const {Router} = require('express');
const {
    createVendor,
    getVendors,
    getVendorById,
    updateVendor
} = require('../controllers/vendorController')
const {validate} = require('../middleware/formsAndInput');
const {requireLogin} = require('../middleware/auth');

const router = Router();

router.post('/create', requireLogin, validate('createVendor'), createVendor);
router.post('/get', getVendors);
router.put('/update', requireLogin,  updateVendor);
router.get('/:id', getVendorById);

module.exports = router;
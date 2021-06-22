const Vendor = require('../models/vendor');
const {validationResult} = require('express-validator');
const {
    resBadRequest,
    resInternalError,
    resSuccess,
    resInvalidRequest,
    resNotFound,
} = require('../utils/custom_responses');



module.exports.createVendor = async (req, res) => {
    
    // Validate data
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return resInvalidRequest(res, errors);
    }

    // Check if user already has a vendor object
        const existingVendor = await Vendor.findOne({userId: req.userId});
        if (existingVendor) return resBadRequest(res, "User already has a vendor object");
    
    
    // Create new vendor
    try {
        const vendor = await Vendor.create({...req.body, location: {
            printableAddress: '',
            longitude: 0,
            latitude: 0
        },
        userId: req.userId
        });
    
        return resSuccess(res, 201, {vendor})
    } catch (error) {
        return resInternalError(res);
    }
    
}

// Get all vendors that match filter specs
module.exports.getVendors = async (req, res) => {

    // Filter by vendorName, deliveryEnabled, volumeRange, location
    try {
        const vendors = await Vendor.find(req.body);

        return resSuccess(res, 200, {vendors});
    } catch (error) {
        return resNotFound(res);
    }
    
}

// Get specific vendor by ID
module.exports.getVendorById = async (req, res) => {

    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) return resNotFound(res);
        
        return resSuccess(res, 200, {vendor});
    } catch(error) {
        return resInternalError(res);
    }
}


// Update specific vendor by ID
module.exports.updateVendor = async (req, res) => {

    try {
        // Check if logged in user has a vendor object to update
        const authVendor = await Vendor.findOne({userId: req.userId});
        if (!authVendor) return resNotFound(res);

        // Update the user's vendor object
        const vendor = await Vendor.findOneAndUpdate({userId: req.userId}, req.body, {new: true});
        if (!vendor) return resInternalError(res);
        
        return  resSuccess(res, 200, {vendor});
    } catch (error) {
        return resInternalError(res);
    }
}
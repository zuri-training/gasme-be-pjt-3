const Vendor = require('../models/vendor');
const { validationResult } = require('express-validator');
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
    const existingVendor = await Vendor.findOne({ userId: req.user._id });
    if (existingVendor) return resBadRequest(res, "User already has a vendor object");


    // Create new vendor
    try {
        const vendor = await Vendor.create({
            ...req.body, location: {
                printableAddress: '',
                coordinates: [0,0],
                type: 'Point'
            },
            userId: req.user._id
        });

        if (!vendor) return resInternalError(res);

        req.user.vendorId = vendor._id;
        req.user.save();

        return resSuccess(res, 201, { vendor })
    } catch (error) {
        return resInternalError(res);
    }

}

// Get all vendors that match filter specs
module.exports.getVendors = async (req, res) => {

    // Filter by vendorName, deliveryEnabled, volumeRange, location
    try {
        if(req.body.coordinates){
            const vendors = await Vendor.find(
                { point :
                    { $near :
                       {
                         $geometry : {
                            type : "Point" ,
                            coordinates : req.body.coordinates },
                         $maxDistance : 10
                       }
                    }
                 }
             )
    
            return resSuccess(res, 200, { vendors });
        }else{
            const vendors = await Vendor.find(req.body);

            return resSuccess(res, 200, {vendors});
        }
        
    } catch (error) {
        console.log(error)
        return resNotFound(res);
    }

}


// Get specific vendor by ID
module.exports.getVendorById = async (req, res) => {

    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) return resNotFound(res);

        return resSuccess(res, 200, { vendor });
    } catch (error) {
        return resInternalError(res);
    }
}


// Update specific vendor by ID
module.exports.updateVendor = async (req, res) => {

    try {
        // Check if logged in user has a vendor object to update
        const authVendor = await Vendor.findOne({ userId: req.user._id });
        if (!authVendor) return resNotFound(res);

        // Update the user's vendor object
        const vendor = await Vendor.findOneAndUpdate({ userId: req.user._id }, req.body, { new: true });
        if (!vendor) return resInternalError(res);

        return resSuccess(res, 200, { vendor });
    } catch (error) {
        return resInternalError(res);
    }
}


// Review a vendor
module.exports.reviewVendor = async (req, res) => {

    // Validate data
    const errors = validationResult(req);
    if (!errors.isEmpty()) return resInvalidRequest(res, errors);

    // Destructure request body
    const {
        vendorId,
        rating,
        body
    } = req.body;

    try {
        const review = await Vendor.review(vendorId, req.user, rating, body);
        if (!review) return resInternalError(res);

        return resSuccess(res, 200, { review });
    } catch (error) {
        return resInternalError(res);
    }
}
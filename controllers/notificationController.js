const Notification = require('./../models/notification')
const Vendor = require('./../models/vendor')

const {
    resBadRequest,
    resInternalError,
    resSuccess,
    resInvalidRequest,
    resNotFound,
} = require('../utils/custom_responses')

module.exports.getAll = async (req, res) => {
    // console.log("I'm in")

    try {
        // Check if user has a vendor object
        const vendor = await Vendor.findById(req.user.vendorId)
        
        if (!vendor) {
            
            // for consumer
            const notifications = await Notification.find({receiverId: req.user.id})
            if (!notifications) return resNotFound(res)

            return resSuccess(res, 200, {notifications})
        }
        
        // for vendor
        const notifications = await Notification.find({receiverId: req.user.vendorId})
        if (!notifications) return resNotFound(res)

        return resSuccess(res, 200, {notifications})

    } catch (error) {
        return resNotFound(res)
    }

}
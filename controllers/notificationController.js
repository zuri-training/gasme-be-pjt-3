const Notification = require('./../models/notification')
const Vendor = require('./../models/vendor')

const {
    resBadRequest,
    resInternalError,
    resSuccess,
    resInvalidRequest,
    resNotFound,
} = require('../utils/custom_responses')

module.exports.getConsumerNotifications = async (req, res) => {

    try {
        const notifications = await Notification.find({receiverId: req.user._id});
        if (!notifications) throw Error ('Failed to get notifications');

        return resSuccess(res, 200, {notifications});
    } catch (error) {
        console.log(error);
        return resInternalError(res);
    }
}


module.exports.getVendorNotifications = async (req, res) => {
    
    try {
        // Check if user has a vendor object
        const vendor = await Vendor.findById(req.user.vendorId)
        if (!vendor) return resBadRequest(res, 'user is not a vendor');

        // Get vendor notifications
        const notifications = await Notification.find({receiverId: vendor._id});
        if (!notifications) throw Error('Failed to get notifications');

        return resSuccess(res, 200, {notifications});
    } catch (error) {
        console.log(error);
        return resInternalError(res);
    }
}

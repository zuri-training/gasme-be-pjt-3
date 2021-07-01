const Notification = require('./../models/notification')

const {
    resBadRequest,
    resInternalError,
    resSuccess,
    resInvalidRequest,
    resNotFound,
} = require('../utils/custom_responses')

module.exports.getAll = async (req, res) => {

    try {
        const notifications = await Notification.find({receiverId: req.user.id})

        return resSuccess(res, 200, {notifications})
    } catch (error) {
        return resNotFound(res)
    }

}
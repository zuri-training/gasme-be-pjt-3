const Order = require('../models/order');
const {
    resNotFound,
    resInternalError,
    resSuccess,
    resBadRequest,
    resInvalidRequest,
    resUnauthorized
} = require('../utils/custom_responses');
const {validationResult} = require('express-validator');
const Vendor = require('../models/vendor');


// Create order

module.exports.createOrder = async (req, res) => {

    // Validate data
    const errors = validationResult(req);

    if (!errors.isEmpty()) return resInvalidRequest(res, errors);

    // Destructure request body
    const { vendorId, volume } = req.body;

    try {
        // Check if vendor exists
        const vendor = await Vendor.findById(vendorId);
        if (!vendor) return resBadRequest(res, 'vendor does not exist');

        const orderParams = {
            ...req.body,
            price: volume * vendor.pricePerKg,
            vendorId: vendor._id,
            userId: req.user._id,
            status: 'created'
        }

        // Create the order
        const order = await Order.create(orderParams);
        if (!order) return resInternalError(res, 'error creating order');

        return resSuccess(res, 201, {order});

    } catch (error) {
        console.log(error);
        return resInternalError(res);
    }
}  


// Get order(s)
// Get consumer orders
module.exports.getConsumerOrders = async (req, res) => {

    // get consumer orders
    try {
        const orders = await Order.find({ userId: req.user._id });
        if (!orders) return resInternalError(res);

        return resSuccess(res, 200, {orders});
    } catch (error) {
        console.log(error);
        return resInternalError(res);
    }
}

// Get vendor orders
module.exports.getVendorOrders = async (req, res) => {

    // Check if user has a vendor object
    const vendor = await Vendor.findById(req.user.vendorId);
    if (!vendor) return resBadRequest(res, 'user has no vendor object');

    // Fetch the vendor orders
    const orders = await Order.find({ vendorId: vendor._id });
    if (!orders) return resInternalError(res);

    return resSuccess(res, 200, {orders});
}



// Manage order statuses

// order status stage checks
const orderStatusValue = {
    created: 1,
    accepted: 2,
    rejected: 3,
    canceled: 4,
    completed: 5
}

// order status stage error text
const orderStatusError = (status, newStatus) => (
    `order has been ${status} and can no longer be ${newStatus}`
)

// preliminary operations before changing status
const orderStatusPrelim = async (req, res) => {
    // Validate data
    const errors = validationResult(req);

    // Destructure request body
    const {orderId} = req.body;

    if (!errors.isEmpty()) return resInvalidRequest(res, errors);

    // get vendor object
    const vendor = await Vendor.findById(req.user.vendorId);
    if (!vendor) return resBadRequest(res, 'user has no vendor object');

    // get order object
    const order = await Order.findById(orderId);
    if (!order) return resNotFound(res, 'order not found');

    // check if order belongs to vendor
    if (
        order.vendorId.toString() !== vendor._id.toString()
        ) return resUnauthorized(res, 'order does not belong to this vendor');

    return order;
}


// Accept order

module.exports.acceptOrder = async (req, res) => {

    const order = await orderStatusPrelim(req, res);
        
    // check if order has passed the point of acceptance
    if (orderStatusValue[order.status] >= orderStatusValue.accepted) {
        return resBadRequest(res, orderStatusError(order.status, 'accepted'));
    }
        
    order.status = "accepted";
    order.save();

    return resSuccess(res, 200, {order});
}



// Reject order

module.exports.rejectOrder = async (req, res) => {

    const order = await orderStatusPrelim(req, res);

    // check if order has passed the point of rejection
    if ((orderStatusValue[order.status] >= orderStatusValue.rejected) || 
    (order.status === "accepted")) {
        return resBadRequest(res, orderStatusError(order.status, 'rejected')); 
    }

    order.status = "rejected";
    order.save();

    return resSuccess(res, 200, {order})
}

// Complete order

module.exports.completeOrder = async (req, res) => {

    const order = await orderStatusPrelim(req, res);

    // check if order has passed the point of completion
    if (order.status !== "accepted") {
        return resBadRequest(res, orderStatusError(order.status, 'completed')); 
    }

    order.status = "completed";
    order.save();

    return resSuccess(res, 200, {order})
}


// Cancel order

module.exports.cancelOrder = async (req, res) => {

    const order = await orderStatusPrelim(req, res);

    // check if order has passed the point of cancellation
    if ((order.status === "completed") || 
    (order.status === "rejected") || 
    (order.status === "canceled")) {
        return resBadRequest(res, orderStatusError(order.status, 'canceled')); 
    }

    order.status = "canceled";
    order.save();

    return resSuccess(res, 200, {order})
}
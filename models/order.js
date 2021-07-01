const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    volume: {
        type: Number,
        required: true
    },
    price: { type: Number, required: true },
    deliveryLocation: {
        printableAddress: { type: String },
        longitude: { type: Number },
        latitude: { type: Number }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'accepted', 'rejected', 'canceled', 'completed']
    },
    notes: String,
    /*
    notes are special delivery instructions
    like drop it on my doorstep and knock three times...lol
    */

}, { timestamps: true });

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
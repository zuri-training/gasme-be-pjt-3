const mongoose = require('mongoose')
const notificationSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
        required: true
    },
    seen: { 
        // false if the vendor hasn't either accepted or rejected or canceled or completed an the order
        // and true if the vendor has either accepted or rejected or canceled or completed an the order
        type: Boolean,
        default: false
    }, 
    title: String,
    message: String
}, {
    timestamps: true
})

const notification = mongoose.model('notification', notificationSchema)

module.exports = notification
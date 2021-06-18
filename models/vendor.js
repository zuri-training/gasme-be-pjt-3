const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    email: { type: String },
    vendorName: { type: String, required: true },
    imageUrl: { type: String },
    phoneNumber: { type: Number, required: true },
    userId: { type: String, required: true },
    deliveryEnabled: { type: Boolean, default: false },
    volumeRange: { type: Array },
    location: { 
        printableAddress: String,
        longitude: Number,
        latitude: Number
     }
     
})
const Vendor = mongoose.model('vendor', vendorSchema)
module.exports = Vendor
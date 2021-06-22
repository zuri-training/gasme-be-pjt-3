const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    email: { type: String },
    vendorName: { type: String, required: true },
    imageUrl: { type: String },
    phoneNumber: { type: Number, required: true },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user",
        required: true 
    },
    deliveryEnabled: { type: Boolean, default: false },
    volumeRange: [Number],
    location: { 
        printableAddress: String,
        longitude: Number,
        latitude: Number
     }
     
});

const Vendor = mongoose.model('vendor', vendorSchema)
module.exports = Vendor;
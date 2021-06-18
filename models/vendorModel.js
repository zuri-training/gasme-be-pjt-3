const mongoose = require('mongoose')
const Schema = mongoose.Schema
const vendorSchema = ({
    email: { type: String },
    vendorName: { type: String },
    imageUrl: { type: String },
    phoneNumber: { type: Number },
    userId: { type: String },
    deliveryEnabled: { type: Boolean },
    volumeRange: { type: Array },
    location: { type: Object }
})
const Vendor = mongoose.model('Vendor', vendorSchema)
module.exports = Vendor
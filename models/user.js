const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    imageUrl: { type: String },
    phoneNumber: { type: Number },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor' },
    active: { type: Boolean, default: false },
    location: {
        printableAddress: { type: String },
        longitude: { type: Number },
        latitude: { type: Number }
    }

})
const User = mongoose.model('user', userSchema)
module.exports = User
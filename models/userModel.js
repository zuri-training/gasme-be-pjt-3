const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = ({
    email: { type: String },
    password: { type: String },
    fullName: { type: String },
    imageUrl: { type: String },
    phoneNumber: { type: Number },
    vendorId: { type: String },
    active: { type: Boolean },
    location: { type: Object }

})
const User = mongoose.model('User', userSchema)
module.exports = User
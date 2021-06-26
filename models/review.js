const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    userName: { type: String, required: true },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
        required: true
    },
    vendorName: { type: String, required: true},
    body: String,
    rating: Number,
}, {
    timestamps: true
});

const review = mongoose.model('review', reviewSchema);

module.exports = review;
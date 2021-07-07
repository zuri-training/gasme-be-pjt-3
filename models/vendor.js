const mongoose = require('mongoose');
const User = require('./user');
const Review = require('./review');

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
    pricePerKg: {
        type: Number,
        required: true
    },
    location: { 
        printableAddress: String,
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
        }
        
     },
    rating: { type: Number, default: 0 },
    ratingTotal: { type: Number, default: 0 },
    totalRated: { type: Number, default: 0 }
}, { timestamps: true });


// Review method for the vendor schema
// Adds a review from a user to a vendor
// Returns the review object
vendorSchema.statics.review = async (vendorId, user, rating=0, reviewBody) => {

    // Fetch vendor object
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw Error ('Vendor not found');

    // Check if user is owner of vendor object
    // Reject if true
    if (
        vendor._id.toString() === user.vendorId.toString()
        ) throw Error ('You cannot rate your own store');

    // Check if user has reviewed vendor before
    const review = await Review.findOne({vendorId, userId: user._id});
    if (review) {

        // Remove user's former rating and add new one
        const tempRatingTotal = vendor.ratingTotal - review.rating;
        vendor.ratingTotal = tempRatingTotal + rating;
        vendor.rating = (Math.round((vendor.ratingTotal / vendor.totalRated) * 10)) / 10;

        // Modify the user's review body and rating
        review.body = reviewBody;
        review.rating = rating;

        vendor.save();
        const updatedReview = review.save();

        return updatedReview;
    } else {

        // Create new review object for user and vendor
        const review = await Review.create({
            userId: user._id,
            vendorId: vendor._id,
            userName: user.fullName,
            vendorName: vendor.vendorName,
            body: reviewBody,
            rating
        });

        // Update the vendor object's rating
        vendor.ratingTotal = vendor.ratingTotal + rating;
        if (rating) vendor.totalRated = vendor.totalRated + 1;
        vendor.rating = (Math.round((vendor.ratingTotal / vendor.totalRated) * 10)) / 10;
        vendor.save();

        return review;
    }
}

vendorSchema.index({point:"2dsphere"})

const Vendor = mongoose.model('vendor', vendorSchema)
module.exports = Vendor;
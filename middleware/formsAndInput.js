const {body} = require('express-validator');

module.exports.validate = (method) => {
    switch(method) {
        case 'signup':
            return [
                body('email').exists().withMessage('email is required').bail()
                .isEmail().withMessage('invalid email'),
                body('password').exists().withMessage('password is required').bail()
                .isLength({min: 6}).withMessage(
                    'password must be at least 6 characters'
                ),
                body('fullName').exists().withMessage('full name is required'),
                body('phoneNumber').exists().withMessage('phone number is required').bail()
                .isInt().withMessage('invalid phone number')
            ]
        case 'login':
            return [
                body('email').exists().withMessage('email is required').bail()
                .isEmail().withMessage('invalid email'),
                body('password').exists().withMessage('password is required')
            ]
        case 'createVendor':
            return [
                body('vendorName').exists().withMessage('vendor name is required'),
                body('volumeRange').exists().withMessage('volume range is required').bail()
                .isArray({min: 2, max: 2}).withMessage('volume range should contain just two numbers'),
                body('volumeRange.*').isNumeric().withMessage('volume has to be numbers'),
                body('phoneNumber').exists().withMessage('phone number is required').bail()
                .isInt().withMessage('invalid phone number'),
                body('pricePerKg').exists().withMessage('price per kg is required').bail()
                .isNumeric().withMessage('price per kg should be a number')
            ]
        case 'reviewVendor':
            return [
                body('vendorId').exists().withMessage('vendor Id is required'),
                body('rating').exists().withMessage('rating is required').bail()
                .isNumeric().withMessage('rating should be a number')
            ]
        case 'createOrder':
            return [
                body('volume').exists().withMessage('order volume is required').bail()
                .isNumeric().withMessage('order volume has to be a number'),
                body('deliveryLocation').exists().withMessage('order delivery location is required'),
                body('deliveryLocation.printableAddress').exists().withMessage(
                    'delivery location should have a printable address'
                ).bail().isString().withMessage('printable address should be a string'),
                body('deliveryLocation.longitude').exists().withMessage(
                    'delivery location should have a longitude'
                ).bail().isNumeric().withMessage('longitude should be a number'),
                body('deliveryLocation.latitude').exists().withMessage(
                    'delivery location should have a latitude'
                ).bail().isNumeric().withMessage('latitude should be a number'),
                body('vendorId').exists().withMessage('vendor ID is required').bail()
                .isMongoId().withMessage('vendor ID should be a string'),
                body('notes').optional().bail().isString().withMessage(
                    'notes should be a string'
                )
            ]
        case 'acceptOrder':
            return [
                body('orderId').exists().withMessage('order ID is required').bail()
                .isMongoId().withMessage('invalid ID')
            ]
        default:
            return []
    }
}
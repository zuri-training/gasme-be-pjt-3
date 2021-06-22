const {body} = require('express-validator');

module.exports.validate = (method) => {
    switch(method) {
        case 'signup':
            return [
                body('email').exists().withMessage('email is required')
                .isEmail().withMessage('invalid email'),
                body('password').exists().withMessage('password is required')
                .isLength({min: 6}).withMessage(
                    'password must be at least 6 characters'
                ),
                body('fullName').exists().withMessage('full name is required'),
                body('phoneNumber').exists().withMessage('phone number is required')
                .isInt().withMessage('invalid phone number')
            ]
        case 'login':
            return [
                body('email').exists().withMessage('email is required')
                .isEmail().withMessage('invalid email'),
                body('password').exists().withMessage('password is required')
            ]
        case 'createVendor':
            return [
                body('vendorName').exists().withMessage('vendor name is required'),
                body('volumeRange').exists().withMessage('volume range is required')
                .isArray({min: 2, max: 2}).withMessage('volume range should contain just two numbers'),
                body('volumeRange.*').isNumeric().withMessage('volume has to be numbers'),
                body('phoneNumber').exists().withMessage('phone number is required')
                .isInt().withMessage('invalid phone number')
            ]
        default:
            return []
    }
}
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
        default:
            return []
    }
}
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const {
    resBadRequest,
    resInternalError,
    resSuccess,
    resInvalidRequest,
    resUnauthorized
} = require('../utils/custom_responses');
const {createToken} = require('../utils/auth');
const {filterObjDel} = require('../utils/util');


// Signup user
module.exports.signUp = async (req, res) => {

    // Validate data
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({
        error: true,
        message: 'invalid request',
        data: errors
    });

    // Destructure request body
    const {
        email,
        password,
        fullName,
        phoneNumber,
    } = req.body;

    const creationForm = {
        email, 
        fullName,
        phoneNumber
    }

    try {
        // Check if user already exists and is active
        const existingUser = await User.findOne({email});

        if (existingUser && existingUser.active) {
            return resBadRequest(res, 'email already registered');
        }

        // Create a new user or update existing user from data provided
        const newUser = existingUser ? (
            await User.findByIdAndUpdate(existingUser._id, creationForm, {
                new: true,
                runValidators: true
            })
            ) : (await new User(creationForm));
        if(!newUser) return resInternalError(res);

        // set existing user active to true
        newUser.active = true;

        const salt = await bcrypt.genSalt(10);
        if(!salt) return resInternalError(res);

        // Hash their password before saving
        newUser.password = await bcrypt.hash(password, salt);
        const savedNewUser = await newUser.save();
        if (!savedNewUser) return resInternalError(res);

        // Return token as cookie with a 3 days expiration date
        const token = createToken(
            savedNewUser._id, savedNewUser.email, savedNewUser.fullName
            );
        if(!token) return resInternalError(res);

        res.cookie('jwt', token, {httpOnly: true,secure: false, maxAge: 3 * 24 * 3600 * 1000});

        // Respond with a success message and the user object
        delete savedNewUser['_doc']['password']
        resSuccess(res, 201, {user: savedNewUser});

    } catch(error) {
        console.log(error);
        return resInternalError(res);
    }
    
}


// Log in user
module.exports.login = async (req, res) => {

    // Validate data
    const errors = validationResult(req);

    if (!errors.isEmpty()) return resInvalidRequest(res, errors);

    // Destructure request body
    const {email, password} = req.body;

    try {
        
        // Check if user exists
        const user = await User.findOne({email});
        if (!user) return resUnauthorized(res, 'email not registered');
        if (!user.active) return resUnauthorized(res, 'email not registered');

        // Check if password matches password in database
        const authenticated = await bcrypt.compare(password, user.password);
        if (!authenticated) return resUnauthorized(res, 'incorrect credentials');

        // Return token as cookie with a 3 days expiration date
        const token = createToken(
            user._id, user.email, user.fullName
            );
        if(!token) return resInternalError(res);

        res.cookie('jwt', token, {httpOnly: true, secure: false, maxAge: 3 * 24 * 3600 * 1000});

        // Respond with a success message and the user object
        delete user['_doc']['password']
        resSuccess(res, 200, {user});
        
    } catch (error) {
        console.log(error);
        return resInternalError(res);
    }
  
}

exports.logout = (req, res) => {
    res.clearCookie('jwt');
    resSuccess(res, 200)
}

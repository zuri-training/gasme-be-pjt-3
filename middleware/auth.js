const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {
    resUnauthorized
} = require('../utils/custom_responses');
const {SECRET} = process.env;

module.exports.requireLogin = async (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) return resUnauthorized(res);
    const token = authorization.split('Bearer ')[1];
    if (!token) return resUnauthorized(res);
    
    // Decode and verify token
    try {
        const verified = jwt.verify(token, SECRET);
        if(!verified) return resUnauthorized(res);

        // Check if user with decoded ID exists
        const user = await User.findById(verified.id);
        if (!user) return resUnauthorized(res);
        // if (!user.active) return resUnauthorized(res);
        req.user = user;

        next();
    } catch (error) {
        return resUnauthorized(res);
    }
    
}


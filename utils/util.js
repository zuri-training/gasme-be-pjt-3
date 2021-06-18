const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const maxAge = 3 * 24 * 3600;

// Creates a jwt token from user id, email and fullName
module.exports.createToken = (id, email, fullName) => {
    return jwt.sign({id, email, fullName}, SECRET, {
        expiresIn: maxAge
    });
}


// Returns a status 400 response
module.exports.resBadRequest = (res, message) => {
    return res.status(400).json({
       error: true,
       message
   })
}

// Returns a status 400 response for invalid data
module.exports.resInvalidRequest = (res, errors) => {
    return res.status(400).json({
        error: true,
        message: 'invalid request',
        data: errors
    });
}

// Returns a status 401 response 
module.exports.resUnauthorized = (res, message='unauthorized') => {
    return res.status(401).json({
        error: true,
        message
    })
}

// Returns a status 500 response
module.exports.resInternalError = (res) => {
   return res.status(500).json({
       error: true,
       message: "Sorry, an error occurred"
   });
}

// Returns a success response
module.exports.resSuccess = (res, status, data) => {
   return res.status(status).json({
       error: false,
       message: 'Successful',
       data
   });
}
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const maxAge = 3 * 24 * 3600;

// Creates a jwt token from user id, email and fullName
module.exports.createToken = (id, email, fullName) => {
    return jwt.sign({id, email, fullName}, SECRET, {
        expiresIn: maxAge
    });
}
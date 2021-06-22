const jwt = require('jsonwebtoken');
const {SECRET} =  process.env;

const maxAge = 3 * 24 * 3600;


module.exports.isOwner = async (req, id) => {
    const token = req.cookies.jwt;

    return jwt.verify(token, SECRET, (error, verified) => {
        if (verified.id === id.toString()) return true;
        return false;
    });
    
}


// Creates a jwt token from user id, email and fullName
module.exports.createToken = (id, email, fullName) => {
    return jwt.sign({id, email, fullName}, SECRET, {
        expiresIn: maxAge
    });
}

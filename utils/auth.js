const jwt = require('jsonwebtoken');
const {SECRET} =  process.env

module.exports.isOwner = async (req, id) => {
    const token = req.cookies.jwt;

    return jwt.verify(token, SECRET, (error, verified) => {
        if (verified.id === id.toString()) return true;
        return false;
    });
    
}
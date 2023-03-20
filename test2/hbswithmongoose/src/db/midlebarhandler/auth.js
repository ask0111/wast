const jwt = require('jsonwebtoken');
const UserCollection = require('../schema.js');

const auth = async (req, res, next)=>{

    try {
        const token = req.cookies.jwt;
        const verifyuser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyuser, 'll');
        next();
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = auth;
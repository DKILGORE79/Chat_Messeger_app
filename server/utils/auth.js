const jwt = require('jsonwebtoken');
const env = require('dotenv')
// set token secret and expiration date
const secret = process.env.TOKEN_SECRET;
const expiration = '2h';

module.exports = {


    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};

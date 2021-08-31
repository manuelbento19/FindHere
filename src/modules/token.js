const jwt = require('jsonwebtoken');
const {secret} = require('../config/auth.json');

module.exports = {

    takeToken(params = {}) {
        return jwt.sign(params,secret);
    }
}
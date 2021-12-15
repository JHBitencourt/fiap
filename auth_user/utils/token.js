const jwt = require('jsonwebtoken')
const cfg = require('../config/config')

const create_token = (id, username) => {
    return jwt.sign({id:id, user:username}, cfg.jwt_key, {expiresIn:cfg.jwt_expires})
}

module.exports = create_token
const jwt = require('jsonwebtoken')
const cfg = require('../config/config')

const auth = (req,res,next)=>{
    const token_created = req.headers.token

    if(!token_created) {
        return res.status(400).send({output: 'Access denied'})
    }

    jwt.verify(token_created, cfg.jwt_key, (error, data) => {
        if(error) {
            return res.status(401).send({output: `Token fail -> ${error}`})
        }

        req.content={
            id:data._id,
            user:data.username
        }
        return next()
    })
}

module.exports = auth
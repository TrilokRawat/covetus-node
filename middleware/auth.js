const jwt = require('jsonwebtoken');

const auth = async (req, res , next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log('token' ,token);
        const decode =  jwt.verify(token, "thisismy secretKey");
        console.log(decode);
        if(decode['_id'] != 'test') {
            throw new Error('token expires');
        }
        // req.token = token;
        next();
    } catch (error) {
        res.status(401).send({massege :"Authorization failed"})
    }
}

module.exports = auth;
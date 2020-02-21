const jwt = require('jsonwebtoken');

function autorizacion (req, res, next) {

    let token = req.headers['token'];

    if (!token) {
        res.send(401);
    }else{
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {

            if(err){
                res.send(401)
            }else{
                next();
            }
        })
    }
}

module.exports = autorizacion;
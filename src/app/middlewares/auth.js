const jwt = require('jsonwebtoken');
const {secret} = require('../../config/auth.json');

module.exports = (req,res,next) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({erro:"Token não inserido"});

    const partsToken = authHeader.split(' ');
    if(!partsToken.length===2)
    return res.status(401).send({erro:"Erro no Token"});
    
    const [esquema,token] = partsToken;

    if(!/^Bearer$/i.test(esquema))
    return res.status(401).send({erro:"Token mal formatado"});

    jwt.verify(token,secret,(error,decoded)=>{
        if(error) return res.status(401).send({erro:"Token inválido"});
        return next();
    })
    

}
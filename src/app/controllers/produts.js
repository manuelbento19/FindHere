const express = require('express');

const Routes = express.Router();

const {TakePage} = require('../../modules/takePage');


Routes.get('/',async(req,res)=>{
    const produto = req.query.produto;
    res.status(200).send(await TakePage(produto));
})


module.exports = rotas => rotas.use('/produto',Routes);
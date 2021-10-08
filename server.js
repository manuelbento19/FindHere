//Instanciando as dependências
const express = require('express');
const cors = require('cors');

const porta = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.options('*', cors());

app.get('/',(req,res)=>{
    res.status(200).send('Bem-vindo ao FindHere. 😎🤳 Criado por: Manuel Canganjo');
});

app.use('/api',require('./src/routes'));

try{
    app.listen(porta,()=>{
        console.log(`API rodando na porta ${porta}`);
    });
}
catch(err){
    console.log(err);
}
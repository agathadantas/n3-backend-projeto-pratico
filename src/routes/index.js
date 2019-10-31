const express = require('express');//chamar express novamente
const router = express.Router();
//chamar router (uma propriedade da biblioteca express) no express

router.get('/', function (req, res) {
//dar um get (para enviar) no router e declarar barra, function voltando a resposta.status 
//(200)esse numero é um padrão de resposta (.enviar ) title (serve como print na tela do browser)
    res.status(200).send ({
        title: "n3-backend-projetopratico"

    });

});

module.exports = router; 

//module exports = router é para poder usar o router no browser, ele envia para fora desse arquivo
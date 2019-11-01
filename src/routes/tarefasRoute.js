const express = require('express'); //chamar express
const router = express.Router(); //chamar router again
const controller = require("../controller/tarefasController.js") ;
//chamar tarefacontroller na pasta dela

router.get('/' , controller.get);
router.get('/:id' , controller.getById);
router.get('/concluido/filtrar' , controller.getConcluido); 
router.get('/:nomeColaborador/buscar' , controller.getNome);
//chamando pela rota, os dados 


module.exports = router; 
//module para retornar para fora








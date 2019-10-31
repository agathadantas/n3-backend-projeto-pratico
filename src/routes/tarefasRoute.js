const express = require('express'); //chamar express
const router = express.Router(); //chamar router again
const controller = require("../controller/tarefasController.js") ;
//chamar tarefacontroller na pasta dela

router.get('/' , controller.get);
router.get('/:id' , controller.getById);
//router.get('/concluidos/filtrar' , controller.getConcluido); 
//router enviar get / :id /concluidos/filtrar , controller. 


module.exports = router; 
//module para retornar para fora








const express = require('express');
const server = express ();
const tarefas = require("./projeto.json") ;

function PercorreArray () {

   tarefas.id()  ;
//percorrer o array e trazer id, retornar 
//valor, e depois chamar função fora

} 
    
server.get('/tarefas/:id', (req, res) =>{
       
    return req.params(tarefas);
});

  

server.listen(400);



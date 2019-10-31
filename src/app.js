const express = require('express'); //declarando e chamando pacote express
const server = express ();  
//essa const server não é a mesma do server, não atrapalha usar o mesmo nome em outra página

const index = require("./routes/index.js") ; //estou chamando o arquivo index js para usar aqui
const tarefas = require("./routes/tarefasRoute.js");

server.use(function(req, res, next){

    res.header("Access-Control-Allow-Origin", "*")
    res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Acept"

    )

        next()

});

server.use("/", index);
server.use("/tarefas", tarefas);

module.exports = server;
    
    
    
    
    










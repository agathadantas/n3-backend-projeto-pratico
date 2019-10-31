const server = require ("./src/app.js"); //chamando o app.js para usar aqui

const porta = 3000; //declarando porta


server.listen (porta, function() { //ouvindo const porta e criando um function para aparecer mensagem

    console.log  (`A porta usada é ${porta}`)


});
const tarefas = require("../model/tarefas.json");//chamar tarefa e puxar json

//exports. coisas que chamamos na tarefasRoutes = respostas e requisição  => 
exports.get = (req, res) => {
    console.log(req.url);//mostrar na tela req .url REQUISIÇÃO
    res.status(200).send(tarefas)//RESPOSTA status(200) enviar const do json

};

exports.getById = (req, res) =>{
    const id = req.params.id;
    if (id < 1 || id > 4) {
        res.redirect(301,"htttps://www.google.com") 
//caso o numero de objetos dentro da array seja menor que 1 ou maior que 4, retornar o erro

    }
    const tarefa = tarefas.find(tarefa => tarefa.id == id)//esse é o else para caso funcione
    res.status(200).send(tarefa)

};

















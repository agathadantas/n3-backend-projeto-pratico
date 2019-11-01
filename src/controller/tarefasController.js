const tarefas = require("../model/tarefas.json");//chamar tarefa e puxar json

//exports. coisas que chamamos na tarefasRoutes = respostas e requisição  => 
exports.get = (req, res) => {
    console.log(req.url);//mostrar na tela req .url REQUISIÇÃO
    res.status(200).send(tarefas)//RESPOSTA status(200) enviar const do json

};

exports.getById = (req, res) =>{
    const id = req.params.id;
    if (id < 1 || id > 4) {
        res.redirect(301,"https://suporte.dominioatendimento.com:82/central/faces/solucao.html?codigo=4180") 
//caso o numero de objetos dentro da array seja menor que 1 ou maior que 4, retornar o erro

    }
    const tarefa = tarefas.find(tarefa => tarefa.id == id)//esse é o else para caso funcione
    res.status(200).send(tarefa)

};

exports.getConcluido = (req, res) => {
    const tarefaConcluidos = tarefas.filter(tarefa => {

        return tarefa.concluido == "true";
//esta chamando o nome que declarei na tarefasRoute
//criando uma const para entrar na const tarefas (que tem o json tarefa como valor)
//usando o filter para entrar no json e trazer um determinado valor
//return dizendo que se dentro do json tarefa, o campo concluido estiver com valor TRUE,
//ele me retorna aquele objeto inteiro como resposta 
    })

        res.status(200).send(tarefaConcluidos);

};
exports.getNome = (req, res) => {
    const nomeColaborador = req.params.nomeColaborador;

    const retornaNome = tarefas.find (tarefa => tarefa.nomeColaborador == nomeColaborador);

    res.status(200).send(retornaNome);
//const nomeColab esta puxando dentro da array json o params :nomeColaborador
//const retornaNome está trazendo o dado puxado pelo find dentro da array que está em tarefas
//retornando a array com o valor achado

};
















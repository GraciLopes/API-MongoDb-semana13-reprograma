//esse arquivo conecta com o mongoose
const mongoose = require('mongoose') //metodos e funções do mongoose, é uma biblioteca

const DB_URL = "mongodb://localhost:27017/reprograma"
    //criei uma const com a URL de conexão com o mongo, a porta 27017 acima é uma porta padrao, reprograma é o nome do meu banco de dados

const connect = () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        //tratativa de possiveis erros, connect é um metodo do proprio mongoose, useNewParser: true evita de receber erros o tempo todo
    const connection = mongoose.connection
        //variavel de conexão com o mongoose .connection é um metodo de conexao do mongoose
    connection.on("error", () => console.error('Erro ao conectar com o MongoDB'))
    connection.once('open', () => console.log("Estamos conectadas"))
}

module.exports = { connect }
    //ok
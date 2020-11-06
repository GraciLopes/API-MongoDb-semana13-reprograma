const mongoose = require('mongoose')
const Schema = mongoose.Schema

const heroisSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    nome: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        //não coloquei required porque nao quero que seja obrigatorio
    },
    local: {
        type: String,
        required: true
    },
    usaCapa: {
        type: Boolean,
        required: true
    },
    quantidadeGatos: {
        type: Number,
        required: true
    },
    quantidadeCachorros: {
        type: Number,
        required: true
    }
}, {
    collection: "herois",
    versionKey: false //para não mostrar a versão ex: _v:0

});

const heroisCollection = mongoose.model('herois', heroisSchema)
    //o mongoose.model chamei a variavel e .model estou chamando o modelo schema, o herois dentro da aspas é o nome da minha coleção dentro do mongo

module.exports = { heroisCollection }
    //ok
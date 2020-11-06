const model = require('../models/heroisSchema')

const getHeroi = (req, res) => {
    console.log(req.url)
    model.heroisCollection.find((error, herois) => {
        if (error) { //se eu tiver um erro eu vou retornar qual é o erro
            return res.status(500).send(error) //erro 500 tive um problema no lado do servidor
        } else {
            return res.status(200).send(herois) //se não tiver erro retorne status 200 ok e todos os herois
        }
    })
}

const getHeroisById = (req, res) => {
    const idParam = req.params.id // buscando pelo id na url
    model.heroisCollection.findById(idParam, (error, herois) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (herois) {
                return res.status(200).send(herois)
            } else {
                return res.status(404).send("Heroi não encontrado")
            }
        }
    })
}

const addHeroi = (req, res) => {
    console.log(req.url)
    const heroiBody = req.body
    const heroi = new model.heroisCollection(heroiBody)

    heroi.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(201).send(heroi)
        }
    })
}


const updateHeroi = (req, res) => {
    const idParam = req.params.id
    const heroiBody = req.body
    const novo = { new: true } //quando o documento for inserido vai retornar o valor modificado e não o original, que é o que acontece por padrão


    model.heroisCollection.findByIdAndUpdate( // findByIdAndUpdate: vou pesquisar pelo meu id e vou atualizar
        idParam,
        heroiBody,
        novo,
        (error, herois) => {
            if (error) {
                return res.status(500).send(error)
            } else if (herois) {
                return res.status(200).send(herois)
            } else {
                return res.sendStatus(400)
            }
        }
    )

}

const deleteHeroi = (req, res) => {
    const idParam = req.params.id
    model.heroisCollection.findByIdAndDelete(idParam, (error, herois) => //procure pelo id e delete
        {
            if (error) {
                return res.status(500).send(error)
            } else {
                if (herois) {
                    return res.status(200).send("Heroi apagado")
                } else {
                    return res.sendStatus(404)
                }
            }
        })
}

module.exports = {
    getHeroi,
    getHeroisById,
    addHeroi,
    updateHeroi,
    deleteHeroi
}
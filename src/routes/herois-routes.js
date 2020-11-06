const express = require('express');
const router = express.Router();
const controller = require('../controller/herois')

router.get('/herois', controller.getHeroi)

router.get('/herois/:id', controller.getHeroisById)

router.post('/herois', controller.addHeroi)

router.put('/herois/:id', controller.updateHeroi)

router.delete('/herois/:id', controller.deleteHeroi)

module.exports = router;
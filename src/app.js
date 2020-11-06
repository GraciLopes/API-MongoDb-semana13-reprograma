const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/repository')
database.connect()

const herois = require('./routes/herois-routes');

app.use(cors());
app.use(express.json());
app.use('/', herois);

module.exports = app
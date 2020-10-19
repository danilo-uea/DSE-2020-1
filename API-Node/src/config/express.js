const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const consign = require('consign');
const log = require('../middlewares/log');

dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
});

const router = require('../routes');
const app = express();

consign()
    .include('./src/controllers')
    .into(app);

app.use(log);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

module.exports = app;
const express = require('express');
const User = require('./user');
const FluxoPessoas = require('./fluxoPessoas');
const HistoricoTemperatura = require('./historicoTemperatura')
const StatusJanelaArcondicionado = require('./statusJanelaArcondicionado')
const router = express.Router();

router.get('/status', (req, res) =>
    res.json({
        status: "ok"
    })
);

router.use('/user', User);
router.use('/fluxoPessoas', FluxoPessoas);
router.use('/historicoTemperatura', HistoricoTemperatura);
router.use('/statusJanelaArcondicionado', StatusJanelaArcondicionado);

module.exports = router;
const express = require('express');
const HistoricoTemperatura = require('../controllers/historicoTemperatura');

const router = express.Router();

router.route('/').get(HistoricoTemperatura.getAll);

router.route('/:id').get(HistoricoTemperatura.get);

router.route('/').post(HistoricoTemperatura.set);

router.route('/:id').put(HistoricoTemperatura.update);

router.route('/:id').delete(HistoricoTemperatura.erase);

module.exports = router;
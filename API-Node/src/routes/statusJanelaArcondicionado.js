const express = require('express');
const StatusJanelaArcondicionado = require('../controllers/statusJanelaArcondicionado');

const router = express.Router();

router.route('/').get(StatusJanelaArcondicionado.getAll);

router.route('/:id').get(StatusJanelaArcondicionado.get);

router.route('/').post(StatusJanelaArcondicionado.set);

router.route('/:id').put(StatusJanelaArcondicionado.update);

router.route('/:id').delete(StatusJanelaArcondicionado.erase);

module.exports = router;
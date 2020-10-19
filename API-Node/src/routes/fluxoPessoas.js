const express = require('express');
const fluxoPessoas = require('../controllers/fluxoPessoas');

const router = express.Router();

router.route('/').get(fluxoPessoas.getAll);

router.route('/:id').get(fluxoPessoas.get);

router.route('/').post(fluxoPessoas.set);

router.route('/:id').put(fluxoPessoas.update);

router.route('/:id').delete(fluxoPessoas.erase);

module.exports = router;
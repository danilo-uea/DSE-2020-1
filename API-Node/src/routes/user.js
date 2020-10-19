const express = require('express');
const user = require('../controllers/user');

const router = express.Router();

router.route('/').get(user.getAllUsers);

router.route('/:id').get(user.getUser);

router.route('/').post(user.setUser);

router.route('/:id').put(user.updateUser);

router.route('/:id').delete(user.deleteUser);

module.exports = router;
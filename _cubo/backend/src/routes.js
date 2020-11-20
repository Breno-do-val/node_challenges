const UserController = require('./controllers/SignupController');
const express = require('express');

const router = express.Router();

router.post('/signup', UserController.save);

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('express-promise-router')();
const UserController = require('./controllers/users_controller')
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/myFirstDatabase';
mongoose.connect(mongoURI, {useNewUrlParser: true});

router.route('/getcoins')
      .get(UserController.getCoins)

router.route('/savecoins')
      .post(UserController.saveCoins)

module.exports = router;

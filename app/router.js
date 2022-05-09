const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePageController');
//const gameController = require('./controller/gameController');

router.get('/', homePageController.home);
router.get('/home', homePageController.home);

//router.get('game/:id', gameController.gamePage);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
console.log("Router Loaded");
const favouriteController = require('../controllers/favourite_controller');
router.get('/', passport.checkAuthentication,favouriteController.showDocuments);
router.get('/toggleLike/:id', passport.checkAuthentication,favouriteController.toggleFavourite);
module.exports = router;
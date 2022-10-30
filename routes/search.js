const express = require('express');
const router = express.Router();
const passport = require('passport');
console.log("Router Loaded");
const searchController = require('../controllers/search_controller');
router.post('/documents',passport.checkAuthentication,searchController.searchDocuments);
router.post('/inPublicDocuments',passport.checkAuthentication,searchController.searchPublicDocuments);
router.post('/inFavourites',passport.checkAuthentication,searchController.searchFavouritesDocuments);
module.exports = router;
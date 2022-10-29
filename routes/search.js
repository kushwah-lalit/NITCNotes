const express = require('express');
const router = express.Router();
const passport = require('passport');
console.log("Router Loaded");
const searchController = require('../controllers/search_controller');
// router.post('/problems',passport.checkAuthentication,searchController.searchProblems);
router.post('/documents',passport.checkAuthentication,searchController.searchDocuments);
// router.post('/codes',passport.checkAuthentication,searchController.searchCodes);
// router.post('/tasks',passport.checkAuthentication,searchController.searchTasks);
module.exports = router;
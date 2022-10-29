const express = require('express');
const router = express.Router();
const passport = require('passport');
console.log("Router Loaded");
const documentController = require('../controllers/document_controller');
router.get('/',passport.checkAuthentication,documentController.documentPage);
router.post('/upload',passport.checkAuthentication,documentController.uploadDoc);
router.get('/download/:id',documentController.downloadDoc);
router.get('/delete/:id', passport.checkAuthentication,documentController.deleteDoc);
router.get('/togglePublic/:id', passport.checkAuthentication,documentController.togglePublic);
router.post('/share', passport.checkAuthentication,documentController.shareDoc);
module.exports = router;
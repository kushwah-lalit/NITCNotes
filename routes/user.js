const express = require('express');
const router = express.Router();
const passport = require('passport');
console.log("Router Loaded");
const userController = require('../controllers/user_controller');
router.get('/login',userController.login);
router.get('/contact',userController.contact);
// sign out
router.get('/sign-out', userController.destroySession);
// for the google
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/login'}),userController.createSession);
// router.get('/profile/:id', passport.checkAuthentication,userController.profile);
// router.post('/update/:id', passport.checkAuthentication,userController.update);
// router.post('/updateName/:id', passport.checkAuthentication,userController.updateName);
// router.post('/updatePassword/:id', passport.checkAuthentication,userController.updatePassword);
// router.post('/updateGithub/:id', passport.checkAuthentication,userController.updateGithub);
// router.post('/updateLinkedin/:id', passport.checkAuthentication,userController.updateLinkedin);
// router.post('/updateFacebook/:id', passport.checkAuthentication,userController.updateFacebook);
// router.post('/updateInstagram/:id', passport.checkAuthentication,userController.updateInstagram);
module.exports = router;
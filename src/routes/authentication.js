/**Requiriendo las dependencias/modulos a utilizar */
const express = require('express');
const router = express.Router();

const passport = require('passport')
const {isLoggedIn, isNotLoggedIn, isAdmin} = require('../lib/auth')

/**Vista del apartado registro usuario */
router.get('/signup', isLoggedIn, isAdmin,  (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', isLoggedIn, isAdmin, passport.authenticate('local.signup', {
        successRedirect: '/data/relacionvehiculos',
        failureRedirect: 'signup',
        failureFlash: true
}));

router.get('/signin', isNotLoggedIn,  (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn,  (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/data/relacionvehiculos',
        failureRedirect: 'signin',
        failureFlash: true
    }) (req, res, next)
});

router.get('/logout',  (req, res, next) =>{
    req.logOut(req.user,err=>{
        if(err) return next(err);
        res.redirect('/signin');
    }); 
});

module.exports = router;
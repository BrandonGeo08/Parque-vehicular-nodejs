const express = require('express');
const router = express.Router();

const passport = require('passport')
const {isLoggedIn} = require('../lib/auth')

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
        successRedirect: '/data/relacionvehiculos',
        failureRedirect: 'signup',
        failureFlash: true
}));

router.get('/signin', (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/data/relacionvehiculos',
        failureRedirect: 'signin',
        failureFlash: true
    }) (req, res, next)
});

router.get('/logout', (req, res, next) =>{
    req.logOut(req.user,err=>{
        if(err) return next(err);
        res.redirect('/signin');
    }); 
});

module.exports = router;
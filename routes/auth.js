const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const User = require('../models/User');

const {forwardAuthenticated} = require('./middleware');

passport.use(new LocalStrategy(function verify(username, password, cb) {
    User.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (!user) {
            return cb(null, false, { message: 'Incorrect username.' });
        } else if (user.password != password) {
            return cb(null, false, { message: 'Incorrect password.' });
        } else {
            return cb(null, user);
        }
    }).catch((error) => {
        console.log(error);
        return cb(null, false, { message: 'Incorrect username or password.' });
    })
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findOne({ where: { id: id } }).then((user) => {
        if (user) {
            done(null, user);
        } else {
            done(null, null);
        }
    }).catch((error) => {
        done(err, null);
    });
});

const login_post = (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/",
        failureFlash: true,
    })(req, res, next);
}
router.post('/login/password', login_post);


router.get('/',  forwardAuthenticated, function (req, res, next) {
    res.render('login');
});


router.get('/logout', (req, res, next) => {
    req.logout(() => {
        req.flash("success_msg", "You are logged out");
        res.redirect("/");
    });
})

module.exports = router;
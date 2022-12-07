const express = require('express');
const router = express.Router();
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const multer = require('multer');
const readXlsxFile = require('read-excel-file');
const passport = require('passport');

const port = process.env.PORT || 5000;

app.use(
    session({
        key: "id",
        secret: process.env.SECRET || "SYstemRandomSECRET",
        resave: false,
        saveUninitialized: true
    })
);


app.use(flash());

app.use(function (req, res, next) {

    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.message = req.flash("message");
    res.locals.path = req.path;

    next();
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = environment === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.locals.loggedin_user = req.user;
    next();
});


//Static Files
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + 'public/css/styles'));

//Set templating Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require("./routes/allRoutes")(app);



//Listen on port 5000
app.listen(port, () => console.info(`Listening on port ${port}`))

module.exports = router;
module.exports = app;
module.exports = {
    //Ensuring if user is logged in
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash("error_msg", "Please log in to view that resource");
        res.redirect("/");
    },

    //Forwarding user to dashboard if authenticated
    forwardAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect("/dashboard");
    },

    forAdminOnly:  function(req, res, next) {
        if (req.user.role == 1) {
            return next();
        }
        req.flash("error_msg", "You are not allowed to access this resource");
        res.redirect("/");
    },

    forFacultyOnly:  function(req, res, next) {
        if (req.user.role == 2) {
            return next();
        }
        req.flash("error_msg", "You are not allowed to access this resource");
        res.redirect("/");
    },
    forStudentOnly:  function(req, res, next) {
        if (req.user.role == 3) {
            return next();
        }
        req.flash("error_msg", "You are not allowed to access this resource");
        res.redirect("/");
    }
};
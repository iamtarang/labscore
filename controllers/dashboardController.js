const { response } = require("..");

let dashboardController = {

    index: async (req, res, next) => {
        res.render('index');
    },
}

module.exports = dashboardController;
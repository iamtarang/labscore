const express = require('express');
const router = express.Router();
const User = require('../models/User');

// router.post('/register/password', register.setPassword);


router.post("/password", function (req, res, next) {
    if (req.body.password === req.body.confirmpasswd) {

        User.update(
            { password: req.body.password },
            { returning: true, where: { username: req.body.username } }
        ).then({
            })
            .catch(next)

        res.redirect('/login');
    }
})

// const register = {

//     setPassword : async (req, res) => {
//         User.destroy({
//             where: {
//                 id: req.body.id
//             }
//         }).then((result) => {
//             // fs.unlink('C:/Users/Admin/Downloads/labscore/uploads/' + {profile: req.body.profile});
//             res.status(200);
//         }).catch((error) => {
//             console.log(error);
//             res.status(500);
//         })

//     }
// }

module.exports = router;
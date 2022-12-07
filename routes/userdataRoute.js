const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {ensureAuthenticated, forAdminOnly} = require('./middleware');

router.get("/", ensureAuthenticated, userController.index);
router.get("/adduser", ensureAuthenticated, forAdminOnly, userController.add_user);
router.post("/userData", ensureAuthenticated, userController.insertUser);
router.delete("/deleteUser", ensureAuthenticated, userController.deleteUser);
router.get("/editUser/:id", ensureAuthenticated, userController.editUser);
router.post("/editUser/:id", ensureAuthenticated, userController.updateUser);


// router.get('users/student_input_form', (req, res) => {
//     res.render('student_input_form');
// });

// router.get('/add_user', (req, res) => {
//     res.render('add_user');
// });


module.exports = router;
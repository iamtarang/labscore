const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const {ensureAuthenticated, forStudentOnly} = require('./middleware');
const multer = require('multer');
const DIR = 'C:/Users/Admin/Downloads/labscore/assignments';

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, DIR);
    },
    filename: function (req, file, cb) {
        // req.body.name = loggedin_user.username;
        req.body.answer = file.originalname;
        // req.body.subject = file.subject;
        cb(null, file.originalname);
        console.log(file.originalname);
    }
});

let upload = multer({ storage: storage });
// console.log("Hello there" + upload.toString());



router.get("/", ensureAuthenticated, forStudentOnly, studentController.index);

// router.get("/createAssignment", ensureAuthenticated, assignmentController.createAssignment);
router.post("/newAssignment", upload.single('answer'), studentController.uploadAssignment);

router.get("/submittedAssignment", ensureAuthenticated, studentController.submitAssignment);


// router.get("/editAssignment/:id", ensureAuthenticated, assignmentController.editCourse);
// router.post("/editAssignment/:id", ensureAuthenticated, assignmentController.updateCourse);

module.exports = router;
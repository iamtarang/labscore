const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignmentController");
const {ensureAuthenticated, forFacultyOnly} = require('./middleware');
const multer = require('multer');
const DIR = 'C:/Users/Admin/Downloads/labscore/uploads';

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, DIR);
    },
    filename: function (req, file, cb) {
        req.body.profile = file.originalname;
        cb(null, file.originalname);
        console.log(file.originalname);
    }
});

let upload = multer({ storage: storage });
// console.log("Hello there" + upload.toString());



router.get("/", ensureAuthenticated, forFacultyOnly, assignmentController.index);

router.get("/createAssignment", ensureAuthenticated, assignmentController.createAssignment);
router.post("/newAssignment", upload.single('profile'), assignmentController.uploadAssignment);

router.delete("/deleteAssignment", ensureAuthenticated, assignmentController.deleteAssignment);


// router.get("/editAssignment/:id", ensureAuthenticated, assignmentController.editCourse);
// router.post("/editAssignment/:id", ensureAuthenticated, assignmentController.updateCourse);

module.exports = router;
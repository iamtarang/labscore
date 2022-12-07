const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseContoller");
const {ensureAuthenticated, forAdminOnly} = require('./middleware');

router.get("/", ensureAuthenticated, forAdminOnly, courseController.index);
router.get("/create", ensureAuthenticated, courseController.create);
router.post("/courseData", ensureAuthenticated, courseController.insertCourse);
router.delete("/deleteCourse", ensureAuthenticated, courseController.deleteCourse);
router.get("/editCourse/:id", ensureAuthenticated, courseController.editCourse);
router.post("/editCourse/:id", ensureAuthenticated, courseController.updateCourse);

module.exports = router;
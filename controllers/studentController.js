const Assignment = require('../models/AssignmentData');
const Student = require('../models/StudentData');
const Course = require('../models/Course');
const Semester = require('../models/Semester');
const fs = require('fs');

let studentController = {

    //Table
    index: async (req, res, next) => {
        Assignment.findAll().then((assignments) => {
            res.render('student', { title: 'Assignment Data', 'assignments': assignments });
        }).catch((error) => {
            console.log(error);
        })
    },

    submitAssignment: async (req, res, next) => {
        Assignment.findAll().then((assignments) => {
            res.render('submitted', { title: 'Submitted Assignments', 'assignments': assignments });
        }).catch((error) => {
            console.log(error);
        })
    },
    // //Form Data
    // createAssignment: async (req, res) => {
    //     Course.findAll().then((courses) => {

    //         Semester.findAll().then((semesters) => {
    //             res.render('faculty/create_assignment', { title: 'Create New Assignment', 'courses': courses, 'semesters': semesters });
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // },

    uploadAssignment: async (req, res) => {
        console.log(req.body);

        console.log('file received');
        Student.create(req.body).then((assignment) => {
            console.log('file received');
            res.redirect("/submittedAssignment");

        }).catch((error) => {
            console.log("Here is your error", error);
        });
    }

    // deleteAssignment: async (req, res) => {
    //     Assignment.destroy({
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then((result) => {
    //         // fs.unlink('C:/Users/Admin/Downloads/labscore/uploads/' + {profile: req.body.profile});
    //         res.status(200);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.status(500);
    //     })
    // }


    // editCourse: async (req, res) => {
    //     var id = req.params.id;
    //     Course.findOne({
    //         where: {
    //             id: id
    //         }
    //     }).then((course) => {
    //         console.log(course);
    //         Semester.findAll().then((semesters) => {
    //             res.render('course/edit', { title: 'Course Data', 'course': course, 'semesters': semesters });
    //         }).catch(error => {
    //             console.log(error);
    //         })
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // },

    // updateCourse: async (req, res) => {
    //     var id = req.params.id;

    //     Course.findOne({
    //         where: {
    //             id: id
    //         }
    //     }).then(course => {
    //         Course.update(req.body, {
    //             where: {
    //                 id: id
    //             }
    //         }).then((updated) => {
    //             res.redirect('/courses');
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }
}

module.exports = studentController;
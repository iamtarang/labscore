const Course = require('../models/Course');
const Semester = require('../models/Semester');
let courseController = {

    index: async (req, res, next) => {
        Course.findAll().then((courses) => {
            res.render('course/list', { title: 'Course Data', 'courses': courses });
        }).catch((error) => {
            console.log(error);
        })
    },

    create: async (req, res) => {
        Semester.findAll().then((semesters) => {
            res.render('course/create', { title: 'Add Course', 'semesters': semesters });
        }).catch((error) => {
            console.log(error);
        })

    },

    insertCourse: async (req, res) => {
        Course.create(req.body).then((course) => {
            res.redirect("/courses")
        }).catch((error) => {
            console.log(error);
        });


    },

    deleteCourse: async (req, res) => {
        Course.destroy({
            where: {
                id: req.body.course_id
            }
        }).then((result) => {
            res.status(200);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        })
    },


    editCourse: async (req, res) => {
        var id = req.params.id;
        Course.findOne({
            where: {
                id: id
            }
        }).then((course) => {
            console.log(course);
            Semester.findAll().then((semesters) => {
                res.render('course/edit', { title: 'Course Data', 'course': course, 'semesters': semesters });
            }).catch(error => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        });
    },

    updateCourse: async (req, res) => {
        var id = req.params.id;

        Course.findOne({
            where: {
                id: id
            }
        }).then(course => {
            Course.update(req.body, {
                where: {
                    id: id
                }
            }).then((updated) => {
                res.redirect('/courses');
            }).catch((error) => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        })
    }
}

module.exports = courseController;
const express = require("express");
const router = express.Router();
const DIR = 'C:/Users/Admin/Downloads/labscore/sheets/';
const { ensureAuthenticated, forAdminOnly } = require('./middleware');

var { Sequelize, Op, QueryTypes } = require('sequelize');
var sequelize = require('../models/database');
const User = require('../models/User')

const readXlsxFile = require('read-excel-file/node')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const uploadFile = multer({ storage: storage })

router.get('/', ensureAuthenticated, forAdminOnly, (req, res) => {
    res.render('users/student_input_form');
});

router.post('/uploadExcel', uploadFile.single('import-excel'), (req, res) => {
    importFileToDb(DIR + req.file.filename)
    // console.log(res);
});

//This will be in controller
function importFileToDb(exFile) {
    readXlsxFile(exFile).then((rows) => {
        rows.shift()

        // const users = 'INSERT INTO user_details (user_id, prn, fname, mname, lname, user_email, passwrd, role) VALUES ?';
        console.log(rows)

        rows.forEach((row) => {
            var user = new User();
            user.username = row[0];
            user.role = 3;
            user.fname = row[2];
            user.mname = row[3];
            user.lname = row[4];
            user.user_email = row[5];
          
            user.save();
          })

        // var user = new User();
        

        // sequelize.query(users, [rows], (error, response) => {
        //     if (error) {
        //         console.error("Processing error: ", error);
        //     }
        //     else{
        //         console.log("Inserted successfully : ", response);
        //         response.redirect('/users');
        //     }
        // });
    });
}

module.exports = router;
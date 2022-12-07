var { DataTypes } = require('sequelize');
var sequelize = require('./database');

const Course = sequelize.define("course_data", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sem_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject_code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
})

module.exports = Course;
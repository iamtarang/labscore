var { DataTypes } = require('sequelize');
var sequelize = require('./database');

const Assignment = sequelize.define("assignmentdata", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    due_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    due_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    uploaded_by: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
})

module.exports = Assignment;
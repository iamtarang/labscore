var { DataTypes } = require('sequelize');
var sequelize = require('./database');

const Student = sequelize.define("studentassignment", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: true
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    due_datetime: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
})

module.exports = Student;
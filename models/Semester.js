var DataTypes = require('sequelize');
var sequelize = require('./database');

const Semester = sequelize.define("semesters", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    modified_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false,
})

module.exports = Semester;
var { DataTypes } = require('sequelize');
var sequelize = require('./database');

const User = sequelize.define("user_details", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prn: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false,
})

module.exports = User;
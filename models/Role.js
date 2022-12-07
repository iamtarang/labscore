var DataTypes = require('sequelize');
var sequelize = require('./database');

const Role = sequelize.define("roles", {
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
})

module.exports = Role;
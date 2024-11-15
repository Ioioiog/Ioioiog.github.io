const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Session = sequelize.define('Session', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    activity_logs: {
        type: DataTypes.JSON,
    },
});

module.exports = Session;
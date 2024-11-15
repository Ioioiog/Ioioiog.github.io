const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    encrypted_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    verification_status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    name: {
        type: DataTypes.STRING,
    },
    dob: {
        type: DataTypes.DATE,
    },
    contact: {
        type: DataTypes.STRING,
    },
    gaming_limits: {
        type: DataTypes.JSON,
    },
    account_status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    },
    profile_picture: {
        type: DataTypes.STRING, // URL or path to profile picture
    },
    preferences: {
        type: DataTypes.JSON, // Preferences related to gaming
    },
});

module.exports = User;
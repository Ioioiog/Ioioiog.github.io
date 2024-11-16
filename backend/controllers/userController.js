const User = require('./models/User');

exports.getUserProfile = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in request after authentication

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ id: user.id, email: user.email, name: user.name, dob: user.dob, contact: user.contact, gaming_limits: user.gaming_limits, profile_picture: user.profile_picture, preferences: user.preferences });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user profile', error });
    }
};

exports.updateUserLimits = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in request after authentication
    const { gaming_limits } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.gaming_limits = gaming_limits;
        await user.save();
        res.json({ message: 'Gaming limits updated', gaming_limits });
    } catch (error) {
        res.status(500).json({ message: 'Error updating gaming limits', error });
    }
};
const Session = require('../models/Session');

exports.getActivitySummary = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in request after authentication

    try {
        const sessions = await Session.findAll({ where: { userId } });
        const activitySummary = sessions.map(session => ({
            duration: session.duration,
            activity_logs: session.activity_logs,
        }));
        res.json({ activitySummary });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving activity summary', error });
    }
};
const Session = require('../models/Session');

exports.getActivitySummary = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in request after authentication

    try {
        const sessions = await Session.findAll({ where: { userId } });
        const activitySummary = sessions.map(session => ({
            duration: session.duration,
            activity_logs: session.activity_logs,
        }));
        res.json({ activitySummary });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving activity summary', error });
    }
};
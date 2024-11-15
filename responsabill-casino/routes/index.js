const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware'); // Assuming you have an auth middleware to check JWT

const router = express.Router();

// Authentication routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// User management routes
router.get('/user/profile', authenticate, userController.getUserProfile);
router.put('/user/limits', authenticate, userController.updateUserLimits);

module.exports = router;

router.get('/activity/summary', authenticate, userController.getActivitySummary);
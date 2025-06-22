const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controllers');
const { protect, admin } = require('../middleware/auth');

// All admin routes require authentication and admin role
router.use(protect);
router.use(admin);

// Dashboard and statistics
router.get('/dashboard', adminController.getDashboardStats);
router.get('/metrics', adminController.getSystemMetrics);

// User management
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Bulk operations
router.post('/users/bulk', adminController.bulkUpdateUsers);

module.exports = router; 
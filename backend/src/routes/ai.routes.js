const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controllers');
const { protect } = require('../middleware/auth');
const { validateCodeReview } = require('../middleware/validation');

// Protected route - requires authentication
router.post('/review', protect, validateCodeReview, aiController.getResponse);

module.exports = router;
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controllers');
const { validateCodeReview } = require('../middleware/validation');

// Public route - no authentication required
router.post('/review', validateCodeReview, aiController.getResponse);

module.exports = router;
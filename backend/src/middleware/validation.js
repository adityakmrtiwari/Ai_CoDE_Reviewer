const handleValidationErrors = (req, res, next) => {
  const errors = [];
  
  // Validate code field
  if (!req.body.code || typeof req.body.code !== 'string') {
    errors.push({
      field: 'code',
      message: 'Code is required and must be a string'
    });
  } else if (req.body.code.length < 1 || req.body.code.length > 10000) {
    errors.push({
      field: 'code',
      message: 'Code must be between 1 and 10000 characters'
    });
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors
    });
  }
  next();
};

const validateCodeReview = [
  handleValidationErrors
];

module.exports = {
  validateCodeReview,
  handleValidationErrors
}; 
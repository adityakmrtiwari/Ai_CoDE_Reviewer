// API Configuration for different environments
const getApiUrl = () => {
  if (import.meta.env.DEV) {
    // Development environment
    return 'http://localhost:3000';
  } else {
    // Production environment - replace with your Render backend URL
    return import.meta.env.VITE_API_URL || 'https://your-backend-url.onrender.com';
  }
};

export const API_BASE_URL = getApiUrl();

// API endpoints
export const API_ENDPOINTS = {
  // AI endpoints
  CODE_REVIEW: `${API_BASE_URL}/api/ai/review`,
  
  // Health check
  HEALTH: `${API_BASE_URL}/health`
}; 
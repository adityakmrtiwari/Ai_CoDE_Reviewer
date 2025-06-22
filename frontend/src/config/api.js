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
  // Auth endpoints
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  PROFILE: `${API_BASE_URL}/api/auth/profile`,
  UPDATE_PROFILE: `${API_BASE_URL}/api/auth/profile`,
  CHANGE_PASSWORD: `${API_BASE_URL}/api/auth/change-password`,
  CREATE_ADMIN: `${API_BASE_URL}/api/auth/create-admin`,
  
  // AI endpoints
  CODE_REVIEW: `${API_BASE_URL}/api/ai/review`,
  
  // Admin endpoints
  ADMIN_DASHBOARD: `${API_BASE_URL}/api/admin/dashboard`,
  ADMIN_METRICS: `${API_BASE_URL}/api/admin/metrics`,
  ADMIN_USERS: `${API_BASE_URL}/api/admin/users`,
  ADMIN_USER: (id) => `${API_BASE_URL}/api/admin/users/${id}`,
  ADMIN_BULK_USERS: `${API_BASE_URL}/api/admin/users/bulk`,
  
  // Health check
  HEALTH: `${API_BASE_URL}/health`
}; 
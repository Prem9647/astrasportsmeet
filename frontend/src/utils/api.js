const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const api = {
  get: (endpoint) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  
  post: (endpoint, data) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  
  put: (endpoint, data) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  
  delete: (endpoint) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  
  upload: (endpoint, formData) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      body: formData,
    });
  },
  
  // Special method for admin requests with access key
  adminPost: (endpoint, data) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-access': process.env.REACT_APP_ADMIN_ACCESS_KEY || 'admin123'
      },
      body: JSON.stringify(data),
    });
  },
  
  adminPut: (endpoint, data) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-access': process.env.REACT_APP_ADMIN_ACCESS_KEY || 'admin123'
      },
      body: JSON.stringify(data),
    });
  },
  
  adminDelete: (endpoint) => {
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-access': process.env.REACT_APP_ADMIN_ACCESS_KEY || 'admin123'
      },
    });
  }
};
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('adminToken');
};

// Helper function to set auth token in localStorage
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('adminToken', token);
  } else {
    localStorage.removeItem('adminToken');
  }
};

// Helper function to remove auth token
export const removeAuthToken = () => {
  localStorage.removeItem('adminToken');
};

export const api = {
  get: (endpoint) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: headers,
    });
  },
  
  post: (endpoint, data) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
  },
  
  put: (endpoint, data) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data),
    });
  },
  
  delete: (endpoint) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: headers,
    });
  },
  
  upload: (endpoint, formData) => {
    const token = getAuthToken();
    const headers = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: headers,
      body: formData,
    });
  },
  
  // Admin methods - now use JWT token from localStorage
  adminPost: (endpoint, data) => {
    const token = getAuthToken();
    if (!token) {
      return Promise.reject(new Error('No authentication token found'));
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
  },
  
  adminPut: (endpoint, data) => {
    const token = getAuthToken();
    if (!token) {
      return Promise.reject(new Error('No authentication token found'));
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
  },
  
  adminDelete: (endpoint) => {
    const token = getAuthToken();
    if (!token) {
      return Promise.reject(new Error('No authentication token found'));
    }
    
    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
  }
};
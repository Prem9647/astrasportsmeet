# Astra Sports Meet

A full-stack application for managing sports events and tracking team points.

## Project Structure

- `frontend/` - React frontend application
- `backend/` - Node.js/Express backend API

## Deployment Instructions

### Frontend Deployment (Vercel)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```
   
4. During setup, configure environment variables:
   - `REACT_APP_API_URL`: Your backend API URL (e.g., `https://your-backend-project-name.vercel.app`)
   - `REACT_APP_ADMIN_ACCESS_KEY`: Your admin access key

### Backend Deployment (Vercel)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. During setup, configure environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A strong secret for JWT tokens
   - `ADMIN_ACCESS_KEY`: Your admin access key (should match frontend)
   - `CLIENT_URL`: Your frontend URL (for CORS)

### Environment Variables

#### Backend (.env)
```
# Server config
PORT=5000
NODE_ENV=production

# Database config
MONGO_URI=your_mongodb_connection_string

# JWT config
JWT_SECRET=your_strong_jwt_secret
JWT_EXPIRES_IN=1d

# Admin config
ADMIN_ACCESS_KEY=your_admin_access_key

# CORS config
CLIENT_URL=your_frontend_url
```

#### Frontend (.env)
```
REACT_APP_API_URL=your_backend_url
REACT_APP_ADMIN_ACCESS_KEY=your_admin_access_key
```

## Admin Access

The default admin login credentials are:
- Username: `Premkumar`
- Password: `Prem@6406`

## Features

- Team points management
- Event scheduling
- Live photo uploads
- Player management
- Responsive design

## Troubleshooting Deployment Issues

If you encounter the error `command 'react-scripts build' exited with 126` during Vercel deployment:

1. Make sure you have a `vercel.json` file in the frontend directory with proper build configuration
2. The file should be automatically created in this project, but if missing, add it with the proper build settings
3. Ensure your environment variables are properly set in the Vercel dashboard
4. Check that you're using a compatible Node.js version (14.x or 16.x)

## Technologies Used

- Frontend: React, React Router
- Backend: Node.js, Express
- Database: MongoDB
- Deployment: Vercel
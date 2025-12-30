const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

const adminAuth = (req, res, next) => {
  try {
    // Get token from Authorization header (Bearer <token>) or from x-admin-access header (for backward compatibility)
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1] || req.headers['x-admin-access'];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No authentication token provided"
      });
    }

    // Verify JWT token
    try {
      const decoded = jwt.verify(token, JWT_SECRET);

      // Check if user is admin
      if (decoded.role !== "admin") {
        return res.status(403).json({
          success: false,
          message: "Admin access required"
        });
      }

      // Attach user info to request object
      req.user = decoded;
      next();
    } catch (error) {
      // If token verification fails, check for legacy x-admin-access header
      if (req.headers['x-admin-access'] === process.env.ADMIN_ACCESS_KEY) {
        // Legacy support for old header-based auth
        next();
      } else {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired token"
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authentication error"
    });
  }
};

module.exports = adminAuth;
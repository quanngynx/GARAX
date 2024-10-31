const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const authHeader =  req.headers['authorization']; // Lấy Authorization header
  const token =  authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized access' });

    }
    console.log(decoded);
    req.IDAcc=decoded.userID;
    req.role=decoded.role;
    
    next();
  });
};

module.exports = authenticateToken;
import jwt from 'jsonwebtoken';
require('dotenv').config();
const authorizeRole = (roles) => {
    return (req, res, next) => {
      const { role } = req;

      if (!roles.includes(role)) {
        return res.status(403).json({ message: 'Forbidden: You do not have access' });
      }
      next();
    };
  };

  export default authorizeRole;

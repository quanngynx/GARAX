'use strict'

/**
 * CORS middleware
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @param {*} next - Express next function
 */
const corsMiddleware = (req, res, next) => {
  const allowedOrigins = ['http://localhost:3050', 'http://localhost:3052'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, uid');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // 204: NO CONTENT
  }

  next();
};

module.exports = corsMiddleware;

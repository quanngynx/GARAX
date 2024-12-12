const jwt = require('jsonwebtoken');

const refreshToken = (req, res) => {
  if (req.cookies?.jwt) {
    const refreshToken = req.cookies.jwt;
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Unauthorized' });
        } else {
          const token = jwt.sign(
            {
              userID: decoded.userID,
              Role: decoded.Role,
              fullname: decoded.Fullname,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: '10m',
            }
          );
          return res.json({ token });
        }
      }
    );
  } else {
    return res.status(406).json({ message: 'Unauthorized' });
  }
};
module.exports = refreshToken;

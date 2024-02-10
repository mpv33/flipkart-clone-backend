import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.error('Invalid token:', err);
        return res.status(401).json({ message: 'Invalid token', error: error.message });
      } else {
        console.log('Decoded token:', decoded);
        req.userId = decoded.userId;
        next();
      }
    });
};

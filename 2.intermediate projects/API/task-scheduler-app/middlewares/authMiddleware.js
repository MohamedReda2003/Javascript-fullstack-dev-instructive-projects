const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const JWT_SECRET = "6144a779651464b1fe5cf69e227a83773172e562416e3707ddf6094c7558dbc703734b0d612351016e03341b765eadd4eeeb98a901bf8bc6fde9d21ecaa8c7cd"
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.redirect('/login');
  }
};

module.exports = authMiddleware;

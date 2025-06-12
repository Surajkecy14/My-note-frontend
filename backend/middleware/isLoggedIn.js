const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token; // read from cookies
  if (!token) {
    return res.json("not logged in user")
  }
    const decoded = jwt.verify(token, 'suraj');
    req.user = decoded; 
    next(); 
};

module.exports = isLoggedIn;

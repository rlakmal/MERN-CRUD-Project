const jwt = require("jsonwebtoken");

const secretKey = "jsdsjhfjshbdywedwedskjndkjwsajhbdsnwnd";

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secretKey, options);
}

// Function to verify a JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
}

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json("Token is missing");
  }

  const user = verifyToken(token);

  if (!user) {
    return res.status(403).json("Invalid token");
  }

  req.user = user;
  next(); // Allow access to the protected route
}

module.exports = { generateToken, verifyToken, authenticateToken };

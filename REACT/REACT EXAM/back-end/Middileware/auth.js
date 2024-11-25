const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey= process.env.secretkey

function verifyToken(req, res, next) {
    const token = req.cookies.Authtoken;

    if (!token) return res.status(401).json({ error: "Access denied" });
    
    try {
      const verified = jwt.verify(token, secretKey);
      console.log(verified);
      console.log(verified.userrole);
      
      req.userrole = verified.userrole;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  }
  
  module.exports = verifyToken;
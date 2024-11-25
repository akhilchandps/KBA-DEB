import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();
const secretKey = process.env.SecretKey;

// const authMiddileware = (req, res, next) => {
//   try {
//     const token = req.cookies.aToken; // Read token from cookies
//     if (!token) {
//       return res.status(401).json({ message: "Authentication token not found" });
//     }

//     // Verify token
//     const verify = jwt.verify(token, secretKey);
//     req.Username = verify.Username;
//     req.UserRole = verify.Role;
//     console.log(verify);
    
//     console.log(verify.Username);
//     console.log(verify.Role);
    
    

//     next();
//   } catch (error) {
//     console.error("Error in authMiddileware:", error.message);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };


const authMiddileware = (req, res, next) => {
  const token = req.cookies.aToken;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded);
    console.log(decoded.Username);
    console.log(decoded.Role);

    req.UserRole = decoded.Username
    req.UserRole = decoded.Role; // Attach decoded user data to the request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};



export { authMiddileware };

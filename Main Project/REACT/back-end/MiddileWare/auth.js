import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const authMiddileware=async(req,res,next)=>{
const secretKey=process.env.SecretKey;

    const cookies=req.headers.cookie
    console.log(cookies);
    

    const cookie=cookies.split(';');

    for(let cooki of cookie){
        const [name,token]=cooki.trim().split('=')

        if(name =="aToken"){
 
          const verify = jwt.verify(token,secretKey);
          console.log(verify);
          req.Username=verify.Username
          req.UserRole=verify.Role
          console.log(verify.Username);
          console.log(verify.Role);
          
          break;
          
        }
    }

    next();
}

export {authMiddileware}
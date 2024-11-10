import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();




const SecretKey = process.env.secret;

const authMid = async(req,res,next)=>{

    const cookies= req.headers.cookie

     const scookie= cookies.split(';');

     for(let cooki of scookie){

        const [name,token] = cooki.trim().split('=');

        if(name == "cToken"){

            const verify =  jwt.verify(token,SecretKey)
            console.log(verify);
            console.log(verify.userrole);
            
            req.username=verify.username
            req.userrole=verify.userrole
            break;
            
        }
     }
   next(); 
}

export {authMid}
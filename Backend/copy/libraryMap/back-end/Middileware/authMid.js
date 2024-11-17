import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.secret;

const TokenVerify =async(req,res,next)=>{

    const cookie = req.headers.cookie

    const cookies  = cookie.split(',')
    
    for(let cook of cookies){

        const [sname,token] = cook.trim().split('=')

        if(sname == "dToken"){

            const verify= jwt.verify(token,secretKey)
            console.log(verify);
            console.log(verify.username);
            console.log(verify.userrole);
            req.userrole=verify.userrole
            req.username=verify.username
            
        }
    }
    next();

}

export {TokenVerify}
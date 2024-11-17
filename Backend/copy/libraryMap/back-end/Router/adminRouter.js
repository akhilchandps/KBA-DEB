import { Router } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { TokenVerify } from "../Middileware/authMid.js";

const adminRouter = Router();
const auth =new Map();

dotenv.config();
const secretKey = process.env.secret

adminRouter.post("/signup",async(req,res)=>{

    const {username,email,password,userrole} =req.body
try {
    if(auth.has(email)){
        res.status(403).json({message:"email Already exist"})
    }else{
        const newP= await bcrypt.hash(password,10)
        auth.set(email,{username,password:newP,userrole})
        console.log(auth.get(email));
        
        res.status(200).json({message:"Register Successfull"})
    }
} catch (error) {
    res.status(500).json(error)
}
})


adminRouter.post("/login",async(req,res)=>{
  
      const {email,password} =req.body 
    const result = auth.get(email)

try {

  if(!result){
    res.status(404).json({message:"Invalid email"})
  }else{
       
    const isvalid = await bcrypt.compare(password,result.password);
    console.log(isvalid);

    if(isvalid){

        const token = jwt.sign({username:result.username,userrole:result.userrole},secretKey,{expiresIn:'2h'})
        res.cookie("dToken",token,{
            httpOnly:true
        })
        console.log(token);
        
        res.status(200).json({message:"Login Successfull"})
    }else{
        res.status(401).json({message:"Invalid Password"})
    }
    

  }
} catch (error) {
    res.status(500).json(error)
}
})

adminRouter.get('/viewUser',TokenVerify, (req,res)=>{
    try{
    const user=req.userrole;
    res.json({user});}
    catch{
        res.status(404).json({message:'user not authorized'});
    }
})

export {adminRouter}
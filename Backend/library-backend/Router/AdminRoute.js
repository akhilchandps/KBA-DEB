import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
const adminRoute=Router()
 const secretKey='akhil'
const user= new Map()
adminRoute.post('/signup',async(req,res)=>{

    const {username,email,password,role} =req.body

    try {
        if(user.has(email)){
          
            res.status(400).json({message:"email already exist"})
        }else{
          
            const newP=  await bcrypt.hash(password,10)
            console.log(newP);
            
            user.set(email,{username,password:newP,role})
            console.log(user.get(email));
            
            res.status(201).json("Register successfully")
        }
    } catch (error) {

        res.status(500).json(error)
    }



})

adminRoute.post('/login',async(req,res)=>{
    const {email,password}=req.body
const result=user.has(email)

try {
    if(user.has(result)){
        const isvalid= await bcrypt.compare(password,result.password)
        if(isvalid){
            const token=jwt.sign({username:result.username,role:result.role},secretKey,{expiresIn:'1h'})
            res.cookie("authtoken",token,{
                httpOnly:true
            });
          
            
            res.status(200).json({message:"login successfully"})
        }else{
            res.status(400).json("login failed")
        }
    }
} catch (error) {
    res.status(500).json(error)
}
    
})

export {adminRoute}


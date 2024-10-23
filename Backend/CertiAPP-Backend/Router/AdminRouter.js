import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const AdminRoute =Router()
const secretKey = "akhil"

const admin = new Map()

//signup
AdminRoute.post('/signup',async(req,res)=>{
    const {username,email,password,role} =req.body

    try {
         
    if(admin.has(email)){
        res.status(400).json({message:"email already exist"})
    }else{

    const newP= await bcrypt.hash(password,10)
        admin.set(email,{username,newP,role})
        res.status(201).json("Admin Register Successfully")
    }

    } catch (error) {
        res.status(500).json(error)
    }

})

//login

AdminRoute.post('/login',async(req,res)=>{
    const {email,password} =req.body

    const result=admin.get(email)
    console.log(result);
    if(!result){
        res.status(400).json({message:"login failed"})
    }else{
        const isvalid = await bcrypt.compare(password,result.newP)
        console.log(isvalid);
        if(isvalid){
            const token =jwt.sign({username:result.username,role:result.role},secretKey,{expiresIn:'1h'})
            console.log(token);
            res.cookie("authtoken",token,{
                httpOnly:true
            });
            console.log(token);
            return res.status(200).json({ message: "Login successful" });
            
        }
        
    }
    

})




export {AdminRoute}





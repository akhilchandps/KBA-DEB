import { Router } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const adminRouter=Router()
const user= new Map()
const secretKey="akhil";

adminRouter.get('/',(req,res)=>{
    res.send("hello world")
})


adminRouter.post('/signup',async(req,res)=>{
    try {
      console.log("users data added"); 
        const data=req.body
        // console.log(data.FirstName);
        // console.log(data.LastName);
             const {
                FirstName,
                LastName,
                Username,
                Password,
                Role
              } =data
    
    
              console.log(FirstName);
              console.log(LastName);
              console.log(Username);
        
              const newP= await  bcrypt.hash(Password,10)
            //   user.set(Username,{
            //     FirstName,LastName,newP,Roll
            //   })
    
              // console.log(user.get(Username));
              // res.status(201).send("register successfull")
              // res.status(201).json({message:"Data Saved"})
    
              if(user.has(Username)){
                res.status(400).json({message:"username Already exist"})
              }else{
                user.set(Username,{
                  FirstName,LastName,newP,Role
                })
                res.status(201).json("register successfull")
              }
    } catch (error) {
      res.status(500).json(error)
    }                   
    })

    adminRouter.post('/login',async(req,res)=>{
        const {Username,Password}=req.body
         console.log(Username);
         
        const result=user.get(Username)
        console.log(result);

        if(!result){
            res.status(400).json({message:"inavlid username"})
        }else{
           const isValid= await bcrypt.compare(Password,result.newP)
            console.log(isValid);

            if(isValid) {
                const token = jwt.sign({Username:Username,Role:result.Role},secretKey,{expiresIn:'1h'})
                res.cookie("authtoken",token,{
                    httpOnly:true
                });
                console.log(token);
                return res.status(200).json({ message: "Login successful" });
                
            }

                  
        }
        
    })

export {adminRouter};
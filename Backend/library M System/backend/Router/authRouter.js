import { Router } from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { authMiddileware } from "../Middileware/auth.js";

dotenv.config();
const secretKey=process.env.SecretKey
const userSchema = new mongoose.Schema({

    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    userRole:String
})

const User = mongoose.model("userDetails",userSchema)

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    genere:String,
    description:String
 
})

const Book = mongoose.model("bookDetails",bookSchema)

mongoose.connect("mongodb://localhost:27017/LIBRARY-SYSTEM")

const adminRouters = Router()

adminRouters.post('/signup',async(req,res)=>{

    const {username,email,password,userRole} =req.body

    const existingEmail = await User.findOne({email:email})

    try {
        if(existingEmail){
            res.status(400).json({message:"Email Already exist"})
        }else{
    
             const newP = await bcrypt.hash(password,10)
    
            const newUser = new User({
                username:username,
                email:email,
                password:newP,
                userRole:userRole
            })
    
            await newUser.save();
    
            res.status(200).json({message:"Register Successfull"})
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        

    }
   

    
})

adminRouters.post("/login",async(req,res)=>{

    const {email,password} = req.body

    const result = await User.findOne({email:email})
 
    try {
        if(!result){

            res.status(404).json({message:"Invalid email"})
          }else{
            
              const isValid = await bcrypt.compare(password,result.password)
      
              if(isValid){
      
                  const token = jwt.sign({username:result.username,userRole:result.userRole},secretKey,{expiresIn:"1h"})
                  console.log(token);
                  
                  res.cookie("bToken",token,{
                      httpOnly:true
                  })
      
                  res.status(200).json({message:"Login successfull"})   
              }else{
                  res.status(400).json({message:"Invalid Password"})
              }
      
          } 
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
    }


})
    
adminRouters.post("/addBook",authMiddileware, async(req,res)=>{
     
    const {title,author,genere,description} =req.body

    const result = await  Book.findOne({title:title})
try {
    if(result){

        res.status(400).json({message:"Book Already exist"})

    }
    else{

        const newBook = new Book({
            title:title,
            author:author,
            genere:genere,
            description:description
        })
        await newBook.save();

        res.status(200).json({message:"Book Added"})

    } 
} catch (error) {
    res.status(500).json(error)
    console.log(error);
}
    
})


adminRouters.get("/getBook/:bname",authMiddileware, async(req,res)=>{

    const title=req.params.bname
    
    const result = await Book.findOne({title:title})
try {
    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).json({message:"not found the book"})
    } 
} catch (error) {
    res.status(500).json(error)
}
  
});



adminRouters.get("/getAllBooks",async(req,res)=>{

    
    const result = await Book.find()
try {
    if(result){
        res.status(200).json(Array.from(result.entries()))

    }else{
        res.status(404).json({message:"There is no Books added found the book"})
    } 
} catch (error) {
    res.status(500).json(error)
}
  
});

adminRouters.get('/viewUser',authMiddileware,(req,res)=>{
    try{
    const user=req.userRole;
    res.json({user});}
    catch{
        res.status(404).json({message:'user not authorized'});
    }
})


// adminRouters.get('/viewCourse', async(req,res)=>{

//     const result = 
//     try{
      

//         if(course.size!=0){
           
            
//         res.send(Array.from(course.entries()))
//     }
// else{
//     res.status(404).json({message:'Not Found'});
// }}
//     catch{
//         res.status(404).json({message:"Internal error"})
//     }
// })

export {adminRouters}
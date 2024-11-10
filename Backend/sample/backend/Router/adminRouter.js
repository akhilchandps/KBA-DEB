import { Router } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authMid } from "../Middileware/authe.js";

dotenv.config();

const authRouter = Router();


const SecretKey = process.env.secret;
const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        unique:true
    },
    email:String,
    password:String,
    userrole:String
})
const bookSchema = new mongoose.Schema ({
    bookname:{
        type:String,
        unique:true
    },
    author:String,
    description:String
})
const User = mongoose.model("userDetails",userSchema)
const Book = mongoose.model("bookDetails",bookSchema)


mongoose.connect("mongodb://localhost:27017/EXAM2")

authRouter.post("/signup",async(req,res)=>{

    const {username,email,password,userrole} = req.body

    const  result =  await  User.findOne({email:email})

try {
    if(result){
        res.status(400).json("email already exist")
    }else{

        const newP= await bcrypt.hash(password,10)
        const newUser = new User({
            username:username,
            email:email,
            password:newP,
            userrole:userrole
        })

        await newUser.save();
        res.status(200).json("Register Successfull")
    }  
} catch (error) {
    res.status(500).json(error)
    console.log(error);
    
}

    

})



authRouter.post("/login",async(req,res)=>{

    const {email,password} =req.body

    const  result =  await  User.findOne({email:email})

try {

   if(!result){
    res.status(404).json({message:"Invalid email"})
   }else{
        
    const isvalid= await bcrypt.compare(password,result.password);

    console.log(isvalid);
    
    if(isvalid){
        const token =  jwt.sign({username:result.username,userrole:result.userrole},SecretKey,{expiresIn:"1h"})
        console.log(token);

        res.cookie("cToken",token,{
            httpOnly:true
        })

        res.status(200).json({message:"Login Successfull"})
        
    }else{
        res.status(401).json({message:"Invalid Password"})
    }
   }
} catch (error) {
    res.status(500).json(error)
    console.log(error);
    
}

    

})

authRouter.post("/addBook",authMid, async(req,res)=>{

    const {bookname,author,description} = req.body
 console.log(req.userrole);
 
    const  result =  await  Book.findOne({bookname:bookname})

try {
    if(result){
       return res.status(403).json("Book Already exist")
    }

     if(req.userrole == "admin"){
        const newBook = new Book({
            bookname:bookname,
            author:author,
            description:description
 
         })
 
         await newBook.save();
         res.status(200).json("Book Added successfull")
        
    }else{
        res.status(401).json("Unauthorized user")
    }  
} catch (error) {
    res.status(500).json(error)
    console.log(error);
    
}
})


//update book

// authRouter.post("/updateBook", authMid, async(req,res)=>{

//     const {bookname,author,description} = req.body
// try {

//     if(req.userrole =="admin"){
//         const updateBook = await Book.findOneAndUpdate(
//             {bookname:bookname},
//     {
//         $set:{
//             bookname:bookname,
//             author:author,
//             description:description
//         }
//     },
//     {new:true});

//         if(!updateBook){
//             return res.status(404).json("Book is not found")
//         }

//         res.status(200).json({message:"Book Updated Successfully",updateBook})

//     }else{
//         res.status(401).json("Unauthorized user")
//     }



// } catch (error) {
//     res.status(500).json({ error: error.message });
//     console.error(error);
// }


// })


  authRouter.put("/updateBook",authMid, async(req,res)=>{

  
    const {bookname,author,description} = req.body

    const result= await Book.findOneAndUpdate({bookname:bookname})
try {
    if(!result){
      return  res.status(404).json({message:"Book is not found"})
    }

    if(req.userrole == "admin"){

        result.bookname = bookname || result.bookname
        result.author = author || result.author
        result.description=description || result.description

        await result.save();
        res.status(200).json({message:"Book is updated",result})

    }else{
        res.status(401).json("Unauthorized user")
    }
   
} catch (error) {
    res.status(500).json({error:error.message})

}
   
  })


  authRouter.get("/getBook/:bname",authMid, async(req,res)=>{

    const bookname =req.params.bname
  
    const result= await Book.findOne({bookname:bookname})
try {
    if(!result){
      return  res.status(404).json({message:"Book is not found"})
    }

    if(req.userrole == "admin"){

        res.status(200).json(result)

    }else{
        res.status(401).json("Unauthorized user")
    }
   
} catch (error) {
    res.status(500).json({error:error.message})

}
   
  })

  authRouter.delete("/deleteBook/:bname",authMid, async(req,res)=>{

    const bookname =req.params.bname
  
    const result= await Book.findOneAndDelete({bookname:bookname})
try {
    if(!result){
      return  res.status(404).json({message:"Book is not found"})
    }

    if(req.userrole == "admin"){

        res.status(200).json({message:"Book is deleted"})

    }else{
        res.status(401).json("Unauthorized user")
    }
   
} catch (error) {
    res.status(500).json({error:error.message})

}
   
  })

  authRouter.get("/getAllBook",authMid, async(req,res)=>{

    
    const result= await Book.find()
try {
    if(result.length == 0){
      return  res.status(404).json({message:"There is no book added found"})
    }

    if(req.userrole == "admin"){

        res.status(200).json(result)

    }else{
        res.status(401).json("Unauthorized user")
    }
   
} catch (error) {
    res.status(500).json({error:error.message})

}
   
  })
export {authRouter}
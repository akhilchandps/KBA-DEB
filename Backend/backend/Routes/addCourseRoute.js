import { Router } from "express";
import { authenticate } from "../Middileware/auth.js";
const addCourse = Router()
const Course = new  Map()
addCourse.post('/addCourse',authenticate,(req,res)=>{
   console.log(req.Username);
   console.log(req.UserRole);
   console.log("Hello world");
const {courseName,courseId,courseDescription,courseType}=req.body
try {

    if (Course.has(courseName)) {
        return res.status(400).json("Course name already exists");
      }


    if(req.UserRole == "admin"){
       
       Course.set(courseName,{courseId,courseDescription,courseType})
       res.status(201).json("Admin Added Course")
    }else{
        res.status(400).json("user is not an admin")
    }
  

} catch (error) {
    
    res.status(500).json(error)
}   
})

 
export {addCourse}
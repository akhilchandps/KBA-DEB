import { Router } from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { authMiddileware } from "../MiddileWare/auth.js";
dotenv.config();
const adminRouter = Router();
const secretKey=process.env.SecretKey;

//schema 

const userSchema = new mongoose.Schema({
   FirstName:String,
   LastName:String,
   Username:{
     type:String,
     unique:true
   },
   Password:String,
   Role:String
})

const User = mongoose.model("userDetails",userSchema)


const classSchema = new mongoose.Schema({

   className:{
      type:String,
      unique:true
   },
   classNumeric:String,
   Section:String,
   Date:String

  
})


const Class = mongoose.model("classDetails",classSchema)



const StudentSchema = new mongoose.Schema({

  FullName:String,
  RollId:{
   type:String,
   unique:true
  },
  EmailId:String,
  Gender:String,
  Class:String,
  DOB:String

  
})


const Student = mongoose.model("studentDetails",StudentSchema)

const SubjectSchema = new mongoose.Schema({

   SubjectName:{
      type:String,
      unique:true
     },
   SubjectCode:String,
   Date:String

 })
 const Subject = mongoose.model("Subjects",SubjectSchema)


 const subjectCombinationSchema = new mongoose.Schema({
   class:String,
   subject:String,
 });
 
 const SubjectCombination = mongoose.model("SubjectCombinations", subjectCombinationSchema);
 
 const resultSchema = new mongoose.Schema({
    
   Class:String,
   StudentName:String,
   Mark1:String,
   Mark2:String,
   Mark3:String
 });

 const Result = mongoose.model("resultDetails",resultSchema)

 
 

mongoose.connect("mongodb://localhost:27017/Student-Result")


//signup

adminRouter.post('/signup',async(req,res)=>{

 const {FirstName,LastName,Username,Password,Role} = req.body
try {
   const existingUser = await User.findOne({Username:Username})

      if(existingUser){

         res.status(400).json("Username Already exist")
      }else{
         
         const newP = await bcrypt.hash(Password,10)
         console.log(newP);
         
        const newUser = new User({

         FirstName:FirstName,
         LastName:LastName,
         Username:Username,
         Password:newP,
         Role:Role

        })

        await newUser.save()
        res.status(200).json({messge:"Register Successfull"})
         
      }
} catch (error) {
   res.status(500).json(error)
}
})

//login


adminRouter.post('/login',async(req,res)=>{
   
   const{Username,Password} = req.body

   const result = await User.findOne({Username:Username});
   
try {

   if(!result){

      res.status(400).json("Invalid Username")
    }else{

      const isvalid= await bcrypt.compare(Password,result.Password)
      console.log(isvalid);

      if(isvalid){

         const token = jwt.sign({Username:Username,Role:result.Role},secretKey,{expiresIn:'1h'})
         console.log(token);
         
         res.cookie("aToken",token,{
            httpOnly:true,
         });

         res.status(200).json({message:"Login Successfull"})

      }else{
         res.status(401).json("Password is Incorrect")
      }
      
    }
} catch (error) {
   res.status(500).json(error)
   console.log(error);
   
}
    
})

//create class

adminRouter.post("/createClass",authMiddileware, async(req,res)=>{

   const {className,classNumeric,Section,Date} =req.body

   const existingClass= await Class.findOne({className:className})

   try {

      if(existingClass){
        return res.status(400).json("Class Already Exist")
      }
      if(req.UserRole == "admin"){
      
     
         const newClass= new Class({
            className:className,
            classNumeric:classNumeric,
            Section:Section,
            Date:Date
         })
   
         newClass.save();
   
         res.status(200).json({messge:"Class Added",newClass})
      }else{
         res.status(401).json("User not an Admin")
      }
   } catch (error) {
      res.status(500).json(error)
   }


})

// get all  classes
adminRouter.get("/getClasses", authMiddileware, async (req, res) => {
   try {
     const classes = await Class.find();
     if(classes){
      res.status(200).json(classes);

     }else{
      res.status(404).json({message:"There is no classes exist"});

     }
   } catch (error) {
     res.status(500).json({ message: "An error occurred while fetching subjects", error });
   }
 });


//get class

adminRouter.get("/getClass/:cname", authMiddileware, async(req,res)=>{

   const className= req.params.cname

   const getClass=await Class.findOne({className:className})
 try {

   if(!getClass){
     return res.status(400).json("Classname is not found")
   }
   if(req.UserRole == "admin"){
      res.status(200).json(getClass)
   }else{
      res.status(401).json("User is not an admin")
   }
 } catch (error) {
   res.status(500).json(error)
 }

})


//update class

adminRouter.patch('/updateClass',authMiddileware,async(req,res)=>{
   
   const {className,classNumeric,Section,Date} =req.body
try {
   if(req.UserRole == "admin"){

      const result = await Class.findOneAndUpdate(
                       {className:className},{
     
                     $set:{
                        classNumeric:classNumeric,
                        Section:Section,
                        Date:Date
     
                     }
                   
      }, { new: true });
     
             if (result.matchedCount == 0) {
               return res.status(400).json({ message: "Class not found" });
                }
            res.status(200).json({message:"Class updated",UpdateClass:result})
      }else {
        res.status(400).json({ message: "Unauthorized Access" });
     }
      
} catch (error) {
   res.status(500).json({ message: "An error occurred. Please check the class details." });
}

})

//delete classname


adminRouter.delete('/deleteUser/:classname',authMiddileware,async(req,res)=>{
   const className = req.params.classname
   try{
       const result = await Class.findOneAndDelete({className:className})
       if(result){
           res.status(200).json("Class Deleted")
       }
       else{
           res.status(400).json("class is not found")
       }
   }
   catch(error){
       res.status(500).json({ message: "An error occurred. Please check the user details.", error });
   }
})

// Addstudent


adminRouter.post("/addStudent",authMiddileware, async(req,res)=>{

   const {FullName,RollId,EmailId,Gender,DOB} =req.body

   const existingStudentId= await Student.findOne({RollId:RollId})

   try {

      if(existingStudentId){
          return res.status(400).json("Student ID Already Exist")
      }
      if(req.UserRole == "admin"){
      
     
         const newStudent= new Student({
           FullName:FullName,
           RollId:RollId,
           EmailId:EmailId,
           Gender:Gender,
           DOB:DOB
         })
   
         newStudent.save();
   
         res.status(200).json({messge:"Student Added",newStudent})
      }else{
         res.status(401).json("User not an Admin")
      }
   } catch (error) {
      res.status(500).json(error)
   }


})

// //getStudent


adminRouter.get("/getStudent/:id", authMiddileware, async(req,res)=>{

   const RollId= req.params.id

   const getStudent=await Student.findOne({RollId:RollId})
 try {

   if(!getStudent){
       return  res.status(404).json("not found student id")
   }
   if(req.UserRole == "admin"){
      res.status(200).json(getStudent)
   }else{
      res.status(401).json("User is not an admin")
   }
 } catch (error) {
   res.status(500).json(error)
 }

})

// Get all students
adminRouter.get("/getStudents", authMiddileware, async (req, res) => {
   try {
     const students = await Student.find();
     res.status(200).json(students);
   } catch (error) {
     res.status(500).json({ message: "An error occurred while fetching subjects", error });
   }
 });

//update students

adminRouter.patch('/updateStudent',authMiddileware,async(req,res)=>{
   
   const {FullName,RollId,EmailId,Gender,DOB} =req.body
try {
   if(req.UserRole == "admin"){

      const result = await Student.findOneAndUpdate(
                       {RollId:RollId},{
     
                     $set:{
                        FullName:FullName,
                        EmailId:EmailId,
                        Gender:Gender,
                        DOB:DOB
     
                     }
                   
      }, { new: true });
     
             if (result.matchedCount == 0) {
               return res.status(400).json({ message: "Class not found" });
                }
            res.status(200).json({message:"Student Deatils Updated",UpdateStudent:result})
      }else {
        res.status(400).json({ message: "Unauthorized Access" });
     }
      
} catch (error) {
   res.status(500).json({ message: "An error occurred. Please check the Student details." });
}

})

 

//delete classname


adminRouter.delete('/deleteStudent/:studname',authMiddileware,async(req,res)=>{
   const RollId = req.params.studname
   try{
       const result = await Student.findOneAndDelete({RollId:RollId})
       if(result){
           res.status(200).json("Student Id Deleted")
       }
       else{
           res.status(400).json("Student ID is not found")
       }
   }
   catch(error){
       res.status(500).json({ message: "An error occurred. Please check the user details.", error });
   }
})

//create subject
adminRouter.post("/createSubject",authMiddileware, async(req,res)=>{

   const {SubjectName,SubjectCode,Date} =req.body

   const existingSubject= await Subject.findOne({SubjectName:SubjectName})

   try {

      if(existingSubject){
        return res.status(400).json("Subject Already Exist")
      }
      if(req.UserRole == "admin"){
      
     
         const newSubject= new Subject({
           SubjectName:SubjectName,
           SubjectCode:SubjectCode,
           Date:Date
         })
   
         newSubject.save();
   
         res.status(200).json({messge:"Subject Created",newSubject})
      }else{
         res.status(401).json("User not an Admin")
      }
   } catch (error) {
      res.status(500).json(error)
   }


})

//getSubject

adminRouter.get("/getSubjects/:subname", authMiddileware, async(req,res)=>{

   const SubjectName= req.params.subname

   const getSubject=await Subject.findOne({SubjectName:SubjectName})
 try {

   if(!getSubject){
    return  res.status(400).json("not found Subject name")
   }
   if(req.UserRole == "admin"){
      res.status(200).json(getSubject)
   }else{
      res.status(401).json("User is not an admin")
   }
 } catch (error) {
   res.status(500).json(error)
 }

})

// Get all subjects
adminRouter.get("/getSubjects", authMiddileware, async (req, res) => {
   try {
     const subjects = await Subject.find();
     res.status(200).json(subjects);
   } catch (error) {
     res.status(500).json({ message: "An error occurred while fetching subjects", error });
   }
 });


 //upadate subjects

 adminRouter.patch('/updateSubject',authMiddileware,async(req,res)=>{
   
   const {SubjectName,SubjectCode,Date} =req.body   
try {
   if(req.UserRole == "admin"){

      const result = await Subject.findOneAndUpdate(
                       {SubjectName:SubjectName},{
     
                     $set:{
                       
                        SubjectCode:SubjectCode,
                        Date:Date
                     }
                   
      }, { new: true });
     
             if (result.matchedCount == 0) {
               return res.status(400).json({ message: "Subjects not found" });
                }
            res.status(200).json({message:"Student Deatils Updated",UpdateSubject:result})
      }else {
        res.status(400).json({ message: "Unauthorized Access" });
     }
      
} catch (error) {
   res.status(500).json({ message: "An error occurred. Please check the Student details." });
}

})


//delete subject001
adminRouter.delete('/deleteSubject/:subjectname', authMiddileware, async (req, res) => {
   const subjectName = req.params.subjectname;
   try {
       const response = await Subject.findOneAndDelete({ SubjectName: subjectName });
       if (response) {
           res.status(200).json("Subject Deleted");
       } else {
           res.status(404).json("Subject is not found");
       }
   } catch (error) {
       res.status(500).json({ message: "An error occurred. Please check the user details.", error });
   }
});


 
adminRouter.post("/addSubjectCombination", authMiddileware, async (req, res) => {
   const { className, subjectName } = req.body;
 
   try {
     // Find the class by name
     const classResult = await Class.findOne({ className });
     if (!classResult) {
       return res.status(404).json({ message: "Class not found" });
     }
 
     // Find the subject by name
     const subjectResult = await Subject.findOne({ SubjectName: subjectName });
     if (!subjectResult) {
       return res.status(404).json({ message: "Subject not found" });
     }
 
     // Check if the combination already exists
     const existingCombination = await SubjectCombination.findOne({
       class: className,
       subject: subjectName,
     });
     if (existingCombination) {
       return res.status(400).json({ message: "Combination already exists" });
     }
 
     // Create the new subject combination
     const newCombination = new SubjectCombination({
       class: className,
       subject: subjectName,
     });
 
     await newCombination.save();
     res.status(200).json({ message: "Subject combination added", newCombination });
   } catch (error) {
     res.status(500).json({ message: "An error occurred", error });
   }
 });
 
 //update Addsubjectcombination

 adminRouter.patch("/UpdateAddSubjectCombination", authMiddileware, async (req, res) => {
   const { className, subjectName } = req.body;
 
   const result = await SubjectCombination.findOneAndUpdate({className:className,subjectName:subjectName},
    { new: true }
   )
try {
   if(result){

      res.status(200).json({message:"SubjectCombination Updated"})
   }else{
      res.status(404).json({message:"Subjectname or classname is not found"})
   }
} catch (error) {
   res.status(500).json(error)
   console.log(error);
   
}

       

 });


adminRouter.get("/getclassId/:classname",authMiddileware,async(req,res)=>{

   const classId= req.params.classname;

   const result = await SubjectCombination.findOne({class:classId})
try {
   if(result){
      res.status(200).json(result);
   }else{
      res.status(404).json(result);
   }
} catch (error) {
   res.status(500).json(error)
}

})

//result

adminRouter.post("/resultStudent",authMiddileware, async(req,res)=>{

    const {Class,StudentName,Mark1,Mark2,Mark3}=req.body

   const resultStudent= await Result.findOne({StudentName:StudentName})

   try {

      if(resultStudent){
          return res.status(400).json("Result Alreadt Declared")
      }
      if(req.UserRole == "admin"){
      
     
         const newStudentResult= new Result({
          Class:Class,
          StudentName:StudentName,
          Mark1:Mark1,
          Mark2:Mark2,
          Mark3:Mark3
         })
   
         newStudentResult.save();
   
         res.status(200).json({messge:"Student Added",newStudentResult})
      }else{
         res.status(401).json("User not an Admin")
      }
   } catch (error) {
      res.status(500).json(error)
   }


})
 

//getSubject

adminRouter.get("/getResult/:stuname", authMiddileware, async(req,res)=>{

   const StudentName= req.params.stuname

   const getStudentResult=await Result.findOne({StudentName:StudentName})
 try {


   if(getStudentResult){
      res.status(200).json(getStudentResult)
   }else{
   res.status(401).json("Not found Student Result")
   }
 } catch (error) {
   res.status(500).json(error)
 }

})

export {adminRouter}


import { Router } from "express";
import bcrypt from 'bcrypt';

const issueCertificate=Router();
const AdminRoute = new Map();
const course= new Map();


//regsiter

issueCertificate.post('/register',async(req,res)=>{
    const {Username,Email,Password}=req.body

     try {
        if(AdminRoute.has(Email)){
            res.status(400).json("Email Already Exist")
        }else{
            const newP = await bcrypt.hash(Password,10)
            AdminRoute.set(Email,{Username,newP})
            res.status(201).json("Register Successfully")
            console.log(AdminRoute.get(Email));
            
        }
     } catch (error) {

           res.status(500).json(error)
     }
})


issueCertificate.post('/login',async(req,res)=>{

    const {Email,Password} = req.body
  try {
        if(!AdminRoute.has(Email)){

        res.status(400).json("Invalid Emaild id Please enter valid email")
    }else{
        const isvalid = bcrypt.compare(Password,AdminRoute.Password)
        console.log(isvalid);
        res.status(201).json("login successfull")
    
    }
  } catch (error) {
    res.status(500).json(error)
  }

    
})

// issue certificate
issueCertificate.post('/addCerificate',(req,res)=>{
    
    const {Course,CertificateId,CertificateName,Grade,Date}=req.body
    try {
        if(course.has(CertificateId)){
            res.status(400).json({message:"Certficate ID Already Exist"})

        }else{
            course.set(CertificateId,{
               Course,CertificateName,Grade,Date
            })
            res.status(201).json("Course Added")
        }
       
        
    } catch (error) {
         res.status(500).json(error)
    }
})

export {issueCertificate}
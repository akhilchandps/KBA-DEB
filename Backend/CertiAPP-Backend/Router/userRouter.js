import { Router } from "express";
import { authenticate } from "../Middileware/userMiddileware.js";
const issueCertificate=Router();

const course= new Map();


// issue certificate
issueCertificate.post('/addCerificate',authenticate,(req,res)=>{
    
    const {Course,CertificateId,CertificateName,Grade,Date}=req.body
    try {
        if(req.UserRole=="admin"){
            if(course.has(CertificateId)){
                res.status(400).json({message:"Certficate ID Already Exist"})
    
            }else{
                course.set(CertificateId,{
                   Course,CertificateName,Grade,Date
                }) 
                res.status(201).json("Admin Course Added")
            }
        }else{
            res.status(400).json("Unauthorized:User not an admin")
        }

       
        
    } catch (error) {
         res.status(500).json(error)
    }
})

issueCertificate.get('/getCertificate/:id',async(req,res)=>{

    const result = req.params.id

    try {
        if(course.has(result)){

            console.log(course.get(result));
            let items=course.get(result)
            return res.status(200).json({
                message: "Courses",
                course: items,
            });   
        }
    } catch (error) {
        res.status(500).json(error)
    }


})

export {issueCertificate}
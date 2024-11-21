import { Router } from "express";
import { authenticate } from "../Middileware/auth.js";
import { adminRouter } from "./adminRoute.js";
const addCourse = Router()
const Course = new  Map()
addCourse.post('/addCourse',authenticate,(req,res)=>{
   console.log(req.Username);
   console.log(req.UserRole);
   console.log("Hello world");
const {courseName,courseId,courseType,Price,courseDescription,}=req.body
try {

    if (Course.has(courseName)) {
        return res.status(400).json({message:"Course name already exists"});
      }


    if(req.UserRole == "admin"){
       
       Course.set(courseName,{courseId,courseType,Price,courseDescription})
       res.status(201).json({message:"Admin Added Course"})
    }else{
        res.status(400).json({message:"user is not an admin"})
    }
  

} catch (error) {
    
    res.status(500).json(error)
}   
})

addCourse.put('/update',(req,res)=>{
    const { courseName,newcourseId,newcourseType,newPrice,newcourseDescription,}=req.body

    if(Course.has(courseName)){
      
        const items=Course.get(courseName)
        items.courseId= newcourseId || items.courseId
        items.courseType=newcourseType || items.newcourseType
        items.Price=newPrice || items.Price
        items.courseDescription= newcourseDescription || items.courseDescription

        Course.set(courseName,items)
        console.log(Course.get(courseName));
        return res.status(200).json({
            message: "Course updated successfully",
            course: items,
        });
        
    }else {
        console.log("Course not found");
        return res.status(404).json("Course not found");
    }

}) 

addCourse.post('/search',(req,res)=>{
    const {courseName,courseId,courseDescription,courseType}=req.body
    const results =[];
        for(const [course,items] of Course){
           
        if(course.courseName.includes(courseName) || items.courseId.includes(courseId) || items.course.includes(courseDescription)|| items.courseType.includes(courseType)) {

           results.push(course,...items)
        }  
        }

        if(results.length>0){
            console.log('Search Results: ', results);
        } else{
            console.log('No items found!')
        }
  

})

//get using params

addCourse.get('/getCourse/:name',authenticate,(req,res)=>{


    const result=req.params.name
try {
    if(Course.has(result)){

        console.log(Course.get(result));
        let items=Course.get(result)
        return res.status(200).json({
            message: `${result}`,
            course: items,
        });    
    }else{
        return res.status(401).json({message:"course is not found"})
    }
} catch (error) {
    
    res.status(500).json(error)
}   
})



//get using params

addCourse.get('/getCourse',(req,res)=>{


    const result=req.query.courseName
    console.log();
    
try {
    if(Course.has(result)){

        console.log(Course.get(result));
        let items=Course.get(result)
        return res.status(200).json({
            message: `${result}`,
            course: items,
        });    
    }else{
      return  res.status(401).json("course is not found")
    }
} catch (error) {
    
    res.status(500).json(error)
}   
})




addCourse.delete('/delete/:name', async (req, res) => {
    const result = req.params.name;
    try {
        if (Course.has(result) ||req.UserRole=="admin") {
            Course.delete(result);
           res.status(200).json({message:"Course deleted successfully"});
        } else {
            res.status(404).json({message:"Course not found"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

adminRouter.get('/viewUser',authenticate,(req,res)=>{
    try{
    const user=req.UserRole;
    res.json({user});}
    catch{
        res.status(404).json({message:'user not authorized'});
    }
})

adminRouter.get('/viewCourse', async(req,res)=>{
    try{
        console.log(Course.size);

        if(Course.size!=0){
           
            
        res.send(Array.from(Course.entries()))
    }
else{
    res.status(404).json({message:'Not Found'});
}}
    catch{
        res.status(404).json({message:"Internal error"})
    }
})


export {addCourse}
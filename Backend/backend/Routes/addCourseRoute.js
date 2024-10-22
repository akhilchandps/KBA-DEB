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

addCourse.put('/update',(req,res)=>{
    const { courseName,newcourseId,newcourseDescription,newcourseType}=req.body

    if(Course.has(courseName)){
      
        const items=Course.get(courseName)
        items.courseId= newcourseId || items.courseId
        items.courseDescription= newcourseDescription || items.courseDescription
        items.courseType=newcourseType || items.newcourseType

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
            message: "Courses",
            course: items,
        });    
    }
} catch (error) {
    
    res.status(500).json(error)
}   
})



//get using params

addCourse.get('/getCourse',(req,res)=>{


    const result=req.query.courseName
try {
    if(Course.has(result)){

        console.log(Course.get(result));
        let items=Course.get(result)
        return res.status(200).json({
            message: `${result}`,
            course: items,
        });    
    }
} catch (error) {
    
    res.status(500).json(error)
}   
})

export {addCourse}
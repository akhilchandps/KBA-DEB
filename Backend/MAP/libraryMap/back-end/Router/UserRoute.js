import { Router } from "express";
import { TokenVerify } from "../Middileware/authMid.js";

const userRoute = Router();
 
const Book = new Map();

userRoute.post("/addBook",TokenVerify, async(req,res)=>{

 const {title,author,genere,description} = req.body;

try {
    if(Book.has(title)){
      return  res.status(403).json({message:"Book Already exist"})
    } 

    if( req.userrole){
        Book.set(title,{author,genere,description})
        console.log(Book.get(title));
        
        res.status(200).json({message:"Book Added Successfully"})
    }else{
        res.status(401).json({message:"unathorized user"})
    }

} catch (error) {
    res.status(500).json(error)
}

})

userRoute.get("/getBook/:btitle",async(req,res)=>{

   const title=req.params.btitle

   try {
       if(Book.has(title)){
           res.status(200).json(Book.get(title))
       }else{
           res.status(404).json({message:"There is no book added"})
       }
   } catch (error) {
       res.status(500).json(error)
   }
   
   })
   userRoute.get("/getAllBook", async (req, res) => {
    try {
      if (Book.size > 0) {

        const allBooks = Array.from(Book.entries());
        res.status(200).json(allBooks);
      } else {
        res.status(404).json({ message: "There are no books added" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
   

export {userRoute}
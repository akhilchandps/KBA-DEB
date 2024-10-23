import { Router } from "express";
import { AuthToken } from "../Middilware/Auth.js";

const addBook=Router()

const Book = new Map();
addBook.post('/addBook',AuthToken,async(req,res)=>{

    const {title,author,genere,description} =req.body
 try {
    if(!Book.has(title,author,genere,description)){
         
        Book.set(title,{author,genere,description})
        res.status(201).json("Book Added")
    }else{
        res.status(400).json("Book already added")
    } 
} catch (error) {
    res.status(500).json(error)
}
    

})


addBook.get("/viewBook/:names",(req,res)=>{

    const result= req.params.names
    console.log(result);
try {
    if(Book.has(result)){

        const getBook=Book.get(result);
        console.log(getBook);
        return res.status(200).json({
            message: `${result}`,
            book: getBook,
        });          
    } 
} catch (error) {
    
}

    


})

export {addBook}


import { Router } from "express";

const addBook=Router()

const Book = new Map();
addBook.post('/addBook',(req,res)=>{

    const {title,author,genere,description} =req.body
 try {
    if(!Book.has(title,author,genere,description)){
         
        Book.set(title,{author,genere,description})
        res.status(201).json("Book Added")
    }else{
        res.status(400).json("please add the book")
    } 
} catch (error) {
    res.status(500).json(error)
}
    

})


addBook.get("viewBook",(req,res)=>{
try {
    if(Book.has(title,author,genere,description)){
        let getBook = Book.get(title)
        res.status(200).json(getBook)
    } else{
        res.status(401).json({message:"There is no book"})
    }
} catch (error) {
    res.status(500).json(error)
}
 
})


export {addBook}


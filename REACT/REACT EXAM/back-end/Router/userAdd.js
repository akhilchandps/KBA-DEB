const verifyToken = require("../Middileware/auth");

const express = require("express");
const Hotel = require("../Models/hotelModel");


const userRoute =express.Router();

userRoute.post("/addBooking", async(req,res)=>{

    const {roomNo,checkInDate,checkOutDate,bookingPerson}= req.body

const result = await Hotel.findOne({roomNo:roomNo})
try {
    if(result){
        return res.status(409).json({message:"room Already Booked"})
     } 
     else{
        const newBooking = new Hotel ({
            roomNo:roomNo,
            checkInDate:checkInDate,
            checkOutDate:checkOutDate,
            bookingPerson:bookingPerson
       })
       await newBooking.save();
       res.status(201).json({message:"room Booked"})
     }
     }
      catch (error) {
    res.status(500).json({message:error.message})
}

})


userRoute.get("/getAllBooking",async(req,res)=>{
  

    const result = await Hotel.find()
try {
    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).json({message:"No Booking found"})
    }
} catch (error) {
    res.status(500).json({message:error.message})
}
    
})


userRoute.get("/getBooking/:day",async(req,res)=>{
  
const checkInDate = req.params.day
    const result = await Hotel.findOne({checkInDate:checkInDate})
try {
    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).json({message:"day Not Booked"})
    }
} catch (error) {
    res.status(500).json({message:error.message})
}
    
})
module.exports=userRoute

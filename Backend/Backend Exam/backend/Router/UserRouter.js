import { Router } from "express";
import mongoose from "mongoose";

const userRouter =Router();

const userSchema = new mongoose.Schema({

    RoomNo:{
        require:true,
        type:String
    },
    
    CheckInDate:{
        require:true,
        type:String
    },
    CheckOutDate:{
        require:true,
        type:String
    },
    BookPersonName:{
        require:true,
        type:String
    },

})

const User = mongoose.model("userDetails",userSchema)

mongoose.connect("mongodb://localhost:27017/Hotel-Booking")

userRouter.post("/addBooking",async(req,res)=>{

    const {RoomNo,CheckInDate,CheckOutDate,BookPersonName} =req.body

      const result = await User.findOne({RoomNo:RoomNo})

      try {
        if(result){
            res.status(403).json({message:"Room is Already Booked"})
        }else{
           const newBooking = new User({
            RoomNo:RoomNo,
            CheckInDate:CheckInDate,
            CheckOutDate:CheckOutDate,
            BookPersonName:BookPersonName

           })
           await newBooking.save();
           res.status(201).json({message:"Added new Booking"})
        }
      } catch (error) {
          res.status(500).json({message:error.message})
      }
}) 

userRouter.put("/update",async(req,res)=>{

    const {RoomNo,CheckInDate,CheckOutDate,BookPersonName} =req.body

    const result = await User.findOne({RoomNo:RoomNo})
try {
    if(result){

        // result.RoomNo = RoomNo || result.RoomNo ;
        result.CheckInDate =CheckInDate ||    result.CheckInDate;
        result.CheckOutDate= CheckOutDate || result.CheckOutDate;
        result.BookPersonName= BookPersonName || result.BookPersonName;
        await result.save();
        res.status(200).json(result)
    }else{
        res.status(404).json({message:"Room No is not found"})
    }
} catch (error) {
    res.status(500).json({message:error.message})
}
   
})

userRouter.get("/viewAllBookings",async(req,res)=>{

    const result = await User.find()
    try {
        if(result){
            res.status(200).json(result)
        }else{
          res.status(404).json({message:"No Bookings"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }

 
})


userRouter.delete("/delete/:rno",async(req,res)=>{

     const RoomNo =req.params.rno

    const result = await User.findOneAndDelete({RoomNo:RoomNo})

    try {
        if(result){
            res.status(200).json({message:"Booking deleted"})
        }else{
             
            res.status(404).json({message:"Room no is not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }


})

userRouter.get("/viewUserBooking/:day",async(req,res)=>{

    const CheckInDate =req.params.day
    const result = await User.findOne({CheckInDate:CheckInDate})
try {
    if(result){
        res.status(200).json(result)
    }else{
        res.status(500).json({message:"Not Booked"})
    }  
} catch (error) {
        res.status(500).json({message:error.message})
}
   
})

export {userRouter}


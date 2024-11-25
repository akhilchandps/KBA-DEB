const mongoose = require("mongoose")
const hotelSchema = new mongoose.Schema({

    roomNo:{
        require:true,
        type:String,
        unique:true
    },
    checkInDate:{
        require:true,
        type:String,
      
    },
    checkOutDate:{
        require:true,
        type:String,
    },
    bookingPerson:{
        require:true,
        type:String,
    }
 
})
const Hotel =mongoose.model("hotelDetails",hotelSchema)

module.exports =Hotel
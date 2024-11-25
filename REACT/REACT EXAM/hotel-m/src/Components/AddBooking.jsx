
import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// roomNo,checkInDate,checkOutDate,bookingPerson
const AddBooking = () => {
 const [roomNo,setRoomNo] =useState('')
 const [checkInDate,setCheckInDate] =useState('')
 const [checkOutDate,setCheckOutDate] =useState('')
 const [bookingPerson,setBookingPerson] =useState('')
  const navigate =useNavigate();


const handleBooking = async(e)=>{
   e.preventDefault();

   console.log(roomNo,checkInDate,checkOutDate,bookingPerson);

  const  newBooking= {
    roomNo,
    checkInDate,
    checkOutDate,
    bookingPerson
  }
   try {
    const response = await fetch("http://127.0.0.1:5000/addBooking",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newBooking)
      })
    console.log(response);
    const data = await response.json()
    console.log(data);
    if(response.status==201){
      alert(data.message)
      navigate('/allBookings')
    }else if(response.status ==409){
        alert(data.message)
    }
  
   } catch (error) {
    console.log(error);
    
   }


}


  return (
    <>
             <div className='flex justify-center'>
   <form  className='bg-slate-400 text-black p-12 w-96 mt-12' onSubmit={handleBooking}>
     <label htmlFor="">RoomNo</label>
     <div>
        <input required  value={roomNo} onChange={(e)=>setRoomNo(e.target.value)} type="text" placeholder='roomNo' className='w-full'/>
     </div>
     <label htmlFor="">checkInDate</label>
     <div>
        <input required value={checkInDate} onChange={(e)=>setCheckInDate(e.target.value)} type="date" placeholder='checkInDate' className='w-full'/>
     </div>
     <label htmlFor="">checkOutDate</label>
     <div>
        <input required value={checkOutDate}  onChange={(e)=>setCheckOutDate(e.target.value)} type="date" placeholder='checkOutDate' className='w-full'/>
     </div>
     <label htmlFor="">bookingPerson</label>
     <div>
        <input required value={bookingPerson} onChange={(e)=>setBookingPerson(e.target.value)} type="text" placeholder='bookingPerson' className='w-full'/>
     </div>

    <div className='my-2 text-center'>
    <button className='bg-white text-black'>Add Booking </button> 
    </div>
       
     
   </form>
      </div>
    </>
  )
}

export default AddBooking

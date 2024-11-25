import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewBooking = () => {

const [items,setItems]=useState("")

const {id} =useParams();
    console.log(id);
    
const viewBooking = async()=>{

    const response = await fetch(`http://127.0.0.1:5000/getBooking/${id}`,{
        method:"GET"
    })
    console.log(response);
    
   const data = await response.json();
   console.log(data);
   setItems(data)
   
}

useEffect(()=>{
  viewBooking();
},[id])

  return (
    <div className='bg-slate-600 text-white mt-12  text-3xl font-bold w-96 m-auto flex flex-col items-center '>
      <h1>{items.roomNo}</h1>
      <h1>{items.bookingPerson}</h1>
      <h1>{items.checkInDate}</h1>
      <h1>{items.checkOutDate}</h1>
    </div>
  )
}

export default ViewBooking

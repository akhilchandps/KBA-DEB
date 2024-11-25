import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllBooking = () => {
  
  const [datas,setDatas]=useState([])

  const getAllBookings = async()=>{
  
    
    const response = await fetch("http://127.0.0.1:5000/getAllBooking",{
      method:"GET",
    })
    console.log(response);
    const data = await response.json();
    console.log(data);
    setDatas(data)

    
    
  }

useEffect(()=>{
   getAllBookings();
},[])


  return (
    <div className='grid grid-cols-3'>
     {
        datas.length>0?(datas.map((item,index)=>(

        <div key={index} className="p-4 border rounded shadow-md m-5">
             <h3>{item.roomNo}</h3>
             <h3>{item.bookingPerson}</h3>
          <Link to={`/getBooking/${item.checkInDate}`}><h3 className='bg-black text-white'>{item.checkInDate}</h3></Link>   

        </div>
        ))):(
          <p>No bookings available.</p>
        )
          
        
     } 
        
    </div>
  )
}

export default AllBooking

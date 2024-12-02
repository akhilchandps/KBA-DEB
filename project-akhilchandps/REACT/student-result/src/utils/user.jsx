import React, { useEffect } from 'react'

const getUsername = () => {


    const getUsername = async()=>{

        const res = await fetch("http://127.0.0.1:5000/viewUsername",{
            method:"GET",
            credentials:"include"
        })

        console.log(res); 
        const data = await res.json();
        console.log(data);
          
    }
          
    useEffect(()=>{
        getUsername();
    },[])


  return (
    <div>
      



    </div>
  )
}

export default getUsername

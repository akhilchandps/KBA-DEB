import React, { useEffect } from 'react'

const getUsername = () => {


    const getUser = async()=>{

        const res = await fetch("http://127.0.0.1:5000/viewUsername",{
            method:"GET",
            credentials:"include"
        })

        console.log(res); 
        const data = await res.json();
        console.log(data);
          
    }
          
    useEffect(()=>{
        getUser();
    },[])


  return (
    <div>
      



    </div>
  )
}

export default getUsername

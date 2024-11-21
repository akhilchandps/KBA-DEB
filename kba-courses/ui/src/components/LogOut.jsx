import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {

  const navigate = useNavigate();

  const handleLogout =async()=>{
    await fetch('/logout',{
        method:"GET",
        credentials:"include"
    });

    document.cookie = "AuthToken=, Max Age=0";
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleLogout} className='text-purple-700 hover:underline'>Logout</button>
    
    </div>
  )
}

export default LogOut

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  const navigate=useNavigate();
const handleLogin=async(e)=>{
    e.preventDefault();
    console.log(email,password);

 const newUser ={
    email,
    password
 }
 const response = await fetch("http://127.0.0.1:5000/login",{
    method:"POST",
    credentials:"include",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(newUser)
})
console.log(response);

console.log(response);
const data = await response.json()
console.log(data);

if(response.status==200){
  alert(data.message)
   navigate("/addBooking")
}else if(response.status ==401){
    alert(data.message)
}
}


  return (
    <>
        <div className='flex justify-center'>
   <form onSubmit={handleLogin} className='bg-slate-400 text-black p-12 w-96 mt-12'>
     <label htmlFor="">email</label>
     <div>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' className='w-full'/>
     </div>
     <label htmlFor="">password</label>
     <div>
        <input onChange={(e)=>setPassword(e.target.value)}  type="text" placeholder='pasword' className='w-full'/>
     </div>
 
        <div className='flex justify-around'>
           <p>Don't have an account</p>
           <Link to="/">Signup</Link>
        </div>
        <div>
        <button className='bg-white'>LOGIN </button>

        </div>
     
   </form>
      </div> 
    </>
  )
}

export default Login

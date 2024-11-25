import React, { useState } from 'react';

import { Link, useNavigate} from 'react-router-dom';


const Signup = () => {

const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [userrole,setUserrole] = useState('')
const navigate = useNavigate();

const handleRegister=async(e)=>{
    e.preventDefault();
    console.log(username,email,password,userrole);
 const newUser ={
    username,
    email,
    password,
    userrole
 }
    const response = await fetch("http://127.0.0.1:5000/signup",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
    })
    console.log(response);
    const data = await response.json()
    console.log(data);

    if(response.status==200){
      alert(data.message)
      navigate('/login')
    }else if(response.status ==409){
        alert(data.message)
    }
    
    

    
}


  return (
    <>
       <div className='flex justify-center'>
   <form  className='bg-slate-400 text-black p-12 w-96' onSubmit={handleRegister}>
     <label htmlFor="">username</label>
     <div>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' className='w-full'/>
     </div>
     <label htmlFor="">email</label>
     <div>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' className='w-full'/>
     </div>
     <label htmlFor="">password</label>
     <div>
        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='pasword' className='w-full'/>
     </div>
     <div>
        <select name="" id="" onChange={(e)=>setUserrole(e.target.value)}  >
            <option value="select" selected>Select</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
        </select>
     </div>
        <div className='flex justify-around'>
           <p>Already have an account</p>
           <Link to="/login">login</Link>
        </div>
    <div>
    <button>SignUp </button> 
    </div>
       
     
   </form>
      </div>
    </>
  )
}

export default Signup

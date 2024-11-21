import React, { useState } from 'react'
import newimg from "../assets/image/aa.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Auth = ({register}) => {

const [FirstName,setFirstName] = useState("");
const [LastName,setLastName] = useState("");
const [Username,setUserName] = useState("");
const [Email,setEmail] = useState("");
const [Password,setPassword] = useState("");

const navigate=useNavigate();
const handleRegister = async(e)=>{
   e.preventDefault();
console.log(FirstName,LastName,Username,Email,Password);

   const UserDetails ={
      FirstName,
      LastName,
      Username,
      Email,
      Password
   }

  const response = await fetch("http://127.0.0.1:3000/signup",{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(UserDetails)
   })
   console.log(response);
   const data = await response.json();
   console.log(data);
   
   if(response.status == 200){
      alert(data.message)
      navigate("/login")
      
   }else if(response.status ==400){
      alert(data.message)
   }
   
}

//handle login

const handleLogin=async(e)=>{
   e.preventDefault();
   const UserDetails ={
      Email,
      Password
   }
   const response = await fetch("http://127.0.0.1:3000/login",{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(UserDetails)
   })
   console.log(response);
   const data = await response.json();
   console.log(data);
   
   if(response.status == 200){
      alert(data.message)
      navigate("/dashboard")
      
   }else if(response.status ==400){
      alert(data.message)
   }
}


  return (
    <div>
          <div>
          
          <div className="justify-center md:flex md:mt-2">
              <div className="md:w-4/12 md:visible invisible	 ">
                  <img src={newimg} alt="" className="w-full md:h-[450px] object-cover "/>
              </div>
             
             <form   action="" className="p-14 md:w-4/12 w-[370px]  bg-[rgba(255,255,255,0.8)] h-[450px]  ">
  
            
              <h1 className="text-2xl font-bold text-center text-[#024550] my-5">STUDENT RESGISTER</h1>
               {
                register &&
                <>
                  <label for="">FirstName</label>
               <div>
                  <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="FirstName" className="w-full h-9 my-2 pl-5"/>
               </div>
               <label for="">LastName</label>
               <div>
                  <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="LastName" className="w-full h-9 my-2 pl-5"/>
               </div>
                <label for="">Username</label>
               <div>
                  <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="enter Username" className="w-full h-9 my-2 pl-5"/>
               </div>
                </>
                
               }
            
               <label for="">Email</label>
               <div>
                  <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="password" className="w-full h-9 my-2 pl-5" />
               </div>
               <label for="">Password</label>
               <div>
                  <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="w-full h-9 my-2 pl-5" />
               </div>
               <div className='my-2'>
                {
                   register && 
                   <select name="" id="userrole" className='p-1 text-white bg-sky-400 border border-none  outline-none'>
                   <option value="Admin">Admin</option>
                   <option value="User">User</option>
               </select>
                }
            

               </div>
            <div>
              <ul className="flex justify-between">
                {
                    register?
                    <>
                     <li>Already have an Account?</li>
                     <li><Link to="/login">Login Here</Link></li>
                    </>:

                    <>
                  <li>Don't have an Account?</li>
                  <li><Link to="/register">Register Here</Link></li>
                  </>

                }
               
              </ul>
            </div>
               <div className="my-3 flex justify-end">
                {
                    register?
                    <>
                 <button onClick={handleRegister} className="bg-green-500 px-3 py-1 text-white">SignIn <i className="fa-solid fa-check text-white font-bold"></i></button>

                    </>:
                         <>
                         <button onClick={handleLogin} className="bg-green-500 px-3 py-1 text-white">LogIn <i className="fa-solid fa-check text-white font-bold"></i></button>
        
                            </>

                }
               </div>

          
             </form>
  
          </div>
      </div>
    </div>
  )
}

export default Auth

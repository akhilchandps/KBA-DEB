import React from 'react'
import newimg from "../assets/image/aa.jpg";
import { Link } from 'react-router-dom';

const Auth = ({register}) => {
  return (
    <div>
          <div>
          
          <div className="justify-center md:flex md:mt-8">
              <div className="md:w-4/12 md:visible invisible	 ">
                  <img src={newimg} alt="" className="w-full md:h-[450px] object-cover "/>
              </div>
             
             <form action="" className="p-14 md:w-4/12 w-[370px]  bg-[rgba(255,255,255,0.8)] h-[450px]  ">
  
            
              <h1 className="text-2xl font-bold text-center text-[#024550] my-5">STUDENT RESGISTER</h1>
               {
                register &&
                <>
                <label for="">Username</label>
               <div>
                  <input type="text" placeholder="enter Username" className="w-full h-9 my-4 pl-5"/>
               </div>
                </>
                
               }
            
               <label for="">Email</label>
               <div>
                  <input type="email" placeholder="password" className="w-full h-9 my-4 pl-5" />
               </div>
               <label for="">Password</label>
               <div>
                  <input type="password" placeholder="password" className="w-full h-9 my-4 pl-5" />
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
                 <button className="bg-green-500 px-3 py-1 text-white"><a href="./studentDash.html">SignIn</a> <i className="fa-solid fa-check text-white font-bold"></i></button>

                    </>:
                         <>
                         <button className="bg-green-500 px-3 py-1 text-white"><a href="./studentDash.html">LogIn</a> <i className="fa-solid fa-check text-white font-bold"></i></button>
        
                            </>

                }
               </div>

               <div>
                {
                   register && 
                   <select name="" id="userrole" className='p-1 text-white bg-sky-400 border border-none  outline-none'>
                   <option value="Admin">Admin</option>
                   <option value="User">User</option>
               </select>
                }
            

               </div>
             </form>
  
          </div>
      </div>
    </div>
  )
}

export default Auth

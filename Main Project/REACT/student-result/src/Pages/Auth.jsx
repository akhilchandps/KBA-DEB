import React, { useState } from 'react'
import newimg from "../assets/image/aa.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Auth = ({ register }) => {

   const [FirstName, setFirstName] = useState("");
   const [LastName, setLastName] = useState("");
   const [Username, setUserName] = useState("");
   const [Email, setEmail] = useState("");
   const [Password, setPassword] = useState("");
   const [Role, setRole] = useState("");


   const navigate = useNavigate();
   const handleRegister = async (e) => {
      e.preventDefault();
      console.log(FirstName, LastName, Username, Email, Password, Role);

      const UserDetails = {
         FirstName,
         LastName,
         Username,
         Email,
         Password,
         Role
      }

        const response = await fetch("http://127.0.0.1:5000/signup",{
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
            localStorage.setItem("user",Username)
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
         const response = await fetch("http://127.0.0.1:5000/login",{
            method:"POST",
            credentials:"include",
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify(UserDetails)
         })
         console.log(response);
         const data = await response.json();
         console.log(data);

         if(response.status == 200){

            const res= await fetch("http://127.0.0.1:5000/viewUser",{
               method:"GET",
               credentials:"include"
            })
            console.log(res);
            const data = await res.json()
            console.log(data);
            
            if(data.user == "Admin"){
               alert("Login Succesfull")
              navigate("/dashboard")
              
            }else{
               navigate("/userDashboard")
            }

         }else if(response.status ==400){
            alert(data.message)
         }
   }


   return (
      <div>
         <div>

            <div className="justify-center md:flex md:mt-2">
               <div className="md:w-4/12 md:visible invisible	 ">
                  <img src={newimg} alt="" className="w-full md:h-[450px] object-cover " />
               </div>

               <form action="" className="p-14 md:w-4/12 w-[370px]  bg-[rgba(255,255,255,0.8)] h-[450px]  ">


                  <h1 className="text-2xl font-bold text-center text-[#024550] my-5">STUDENT RESGISTER</h1>
                  {
                     register &&
                     <>
                        <label for="">FirstName</label>
                        <div>
                           <input required onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="FirstName" className="w-full h-9 my-2 pl-5" />
                        </div>
                        <label for="">LastName</label>
                        <div>
                           <input required onChange={(e) => setLastName(e.target.value)} type="text" placeholder="LastName" className="w-full h-9 my-2 pl-5" />
                        </div>
                        <label for="">Username</label>
                        <div>
                           <input required onChange={(e) => setUserName(e.target.value)} type="text" placeholder="enter Username" className="w-full h-9 my-2 pl-5" />
                        </div>
                     </>

                  }

                  <label for="">Email</label>
                  <div>
                     <input required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="password" className="w-full h-9 my-2 pl-5" />
                  </div>
                  <label for="">Password</label>
                  <div>
                     <input required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="w-full h-9 my-2 pl-5" />
                  </div>
                  <div className='my-2'>
                     {register && (
                        <select required
                           name="Role"
                           value={Role} 
                           className="p-1 text-white bg-sky-400 border border-none outline-none"
                           onChange={(e) => {
                              setRole(e.target.value);
                              console.log(e.target.value); 
                           }}
                        >
                           <option value="" disabled>Select Role</option> 
                           <option value="Admin">Admin</option>
                           <option value="User">User</option>
                        </select>
                     )}
                  </div>

                  <div>
                     <ul className="flex justify-between">
                        {
                           register ?
                              <>
                                 <li>Already have an Account?</li>
                                 <li><Link to="/login">Login Here</Link></li>
                              </> :

                              <>
                                 <li>Don't have an Account?</li>
                                 <li><Link to="/register">Register Here</Link></li>
                              </>

                        }

                     </ul>
                  </div>
                  <div className="my-3 flex justify-end">
                     {
                        register ?
                           <>
                              <button onClick={handleRegister} className="bg-green-500 px-3 py-1 text-white">SignIn <i className="fa-solid fa-check text-white font-bold"></i></button>

                           </> :
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



// const Login = () => {
//    const [Name, setName] = useState("");
//    const [Password, setPassword] = useState("");
//    const navigate = useNavigate();
 
//    const loginSubmit = async (e) => {
//      e.preventDefault();
//      const loginDetails = {
//        Name,
//        Password,
//      };
//      const res = await fetch("/api/login", {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        body: JSON.stringify(loginDetails),
//        credentials: "include",
//      });
//      if (res.ok) {
//        const data = await fetch("/api/viewUser", {
//          headers: { "Content-Type": "application/json" },
//        });
       
//        const user = await data.json();
//        localStorage.setItem('Name', Name);
//        console.log(user);
//        console.log("Login success");
 
 
//        toast.success("Logging in...");
//        setTimeout(() => {
//          if (user === "admin") {
//            navigate("/AdminDash");
//          } else {
//            navigate("/UserDash");
//          }
//        }, 3000);
//      } else {
//        toast.error("Please check your credentials.");
//      }
//    };
import React, { useEffect, useState } from 'react';
import img from "../assets/image/security-camera-3174223_1280.jpg";
import {  useNavigate } from 'react-router-dom';

const UserDashBoard = () => {


  const [datas, setDatas] = useState([]);
  const [RollId, setRollId] = useState("")
  const [classes,setClassName] = useState("")
 
  const navigate = useNavigate();


  const getAllclassNamees = async () => {
    const response = await fetch("http://127.0.0.1:5000/getClasses", {
      method: "GET",
      credentials:"include"
    });
    console.log(response);
    
    const data = await response.json();
    console.log(data);
    setDatas(data)
    
    setDatas(data);
  };

  useEffect(() => {
    getAllclassNamees();
  }, []);

//login

const handleLogin= async(e)=>{
  e.preventDefault();
  const userData={
    RollId:RollId,
    className:classes

  }
   try {
    const res = await fetch("http://127.0.0.1:5000/resultLogin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userData)
    })
    console.log(res);
    const setdata = await res.json()
    console.log(setdata);
  
    if(res.ok){
      alert(setdata.message)
      navigate(`/result/${RollId}`)
    }else{
      alert(setdata.message)
    }
   } catch (error) {
    console.log(error);
    
   }




}





  return (
    <>

    <div className="row md:flex md:justify-around align-center">
      

      <div className="col md:w-96 w-full  bg-[#024550] md:h-[101vh] h-[600px]">
          <div className="flex md:justify-between justify-center md:mt-14 mb-5 w-[165px] md:m-5">
            <div className="w-12">
              <img src="./image/uuuu.jpg" className="w-full rounded-full" alt=""/>
            </div>
            <a href="./Dashboard.html" className="text-3xl font-bold text-white text-center">User</a>
          </div> 
          <hr/>
          <div className="dropdown flex flex-col items-center md:flex-row">
            <button className="dropbtn md:text-xl text-sm font-bold  text-white "><i className="fa-solid fa-landmark mx-5 text-white"></i>Student className</button>
            <div className="dropdown-content">
              <div>
              
              </div>
              {/* <div className="dropdown md:w-52 flex flex-col items-center md:justify-center  md:flex-row">
                    <button onClick={handleLogout} className="dropbtn  md:text-xl text-sm  font-bold  text-white"><i className="fa-solid fa-right-from-bracket mr-3"></i><Link to="./Adminlogin.html">LogOut</Link></button>
                  </div>   */}
            </div>
          </div>


        </div>
 


      <div className="col w-full bg-cover md:bg-cover  " style={{ backgroundImage: `url(${img})` }}>
          <div className=" flex justify-center ">
         
              <form onSubmit={handleLogin}  className="w-3/5 col bg-[rgba(255,255,255,0.8)] p-10 mt-20">
                  <div className="my-4 text-2xl text-center font-bold">
                      <h1>School result Management System</h1>
                  </div>
            
                  <label for="">Enter Roll No Id</label>
                  <div className="my-3">
                      <input onChange={(e)=>setRollId(e.target.value)} type="text" className="w-full h-8 pl-5" placeholder="Enter your roll no Id"/>
                  </div>
                  <label for="">className</label>
                  <div className="my-3">
                    <select name="" onChange={(e)=>setClassName(e.target.value)}  id="" className="w-full h-8 pl-5" >
                      <option value="" selected>Select className</option>
                      {
                        datas.map((item,index)=>(
                         
                          <option key={index} value={item.className}>{item.className}</option>
                        ))
                     

                      }
                    </select>
                  </div>
  
                  <div className=" flex justify-end">
                      <button className="bg-green-500 text-white px-3 py-1">Search </button>
                  </div>
                  {/* <div>
                      <button className="bg-black text-white p-2"><a href="./home.html">Back to home</a></button>
                  </div> */}
              </form>
          </div>
           </div>

  </div>
    </>
  )
}

export default UserDashBoard

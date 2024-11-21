import React, { useState } from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/pexels-nietjuh-2008145.jpg"
const CreateClass = () => {

const [className,setClassName] = useState("")
const [classNumeric,setClassNumeric] = useState("")
const [Section,setSection] = useState("")
const [Date,setDate] = useState("")

const handleClass = async(e)=>{
  e.preventDefault();
  console.log(className,classNumeric,Section,Date);
  
  const newClass={
    className,
    classNumeric,
    Section,
    Date
    
  }

  const response = await fetch("http://127.0.0.1:3000/createClass", {
    method: "POST",
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newClass),
  });
  console.log(response);
  
  
   
   
}





  return (
 <>
  <div class="row md:flex md:justify-around align-center">

    <Dashboard/>


    <div class="col w-full flex justify-center text-white " style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
        
        <form onSubmit={handleClass} class="rounded-md md:w-2/4 w-[350px] bg-[rgba(0,0,0,0.8)] mt-20  p-10 h-[530px] backdrop-blur-sm">
        <h1 class="text-2xl font-bold">Create Student class</h1>
          <label for="">Classname</label>
          <div class="my-3">
            <input onChange={(e)=>setClassName(e.target.value)} type="text" placeholder="class " required class="h-8 w-full pl-3 text-black"/>
            <p class="text-gray-500">Numerix example third,fourth</p>
          </div>
          <label for="">Classname in Numeric</label>
          <div class="my-3">
            <input onChange={(e)=>setClassNumeric(e.target.value)}  type="text" placeholder="class" required  class="h-8 w-full pl-3 text-black "/>
            <p class="text-gray-500">Eg, 2,3,4,5</p>
          </div>
          <label for="">Section</label>
          <div class="my-3">
            <input onChange={(e)=>setSection(e.target.value)}  type="text" placeholder="section" required  class="h-8 w-full pl-3 text-black"/>
            <p class="text-gray-500">Eg,A,B,C etc</p>
          </div>
          <label for="">Date</label>
          <div class="my-3">
            <input onChange={(e)=>setDate(e.target.value)}  type="date" placeholder="section" required  class="h-8 w-full pl-3 text-black"/>
      
          </div>

          <div>
            <button type="submit" class="bg-green-600 text-white p-2">submit<i class="fa-solid fa-check"></i></button>
          </div>
        </form>
    </div>
    </div>
  
    
</>

  )
}

export default CreateClass

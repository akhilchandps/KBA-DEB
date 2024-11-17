import React from 'react'
import Dashboard from '../Components/Dashboard'

const CreateClass = () => {
  return (
 <>
  <div class="row md:flex md:justify-around align-center">

    <Dashboard/>


    <div class="col w-full flex justify-center text-white  bg-[url(/image/pexels-nietjuh-2008145.jpg)] bg-cover " >
        
        <form class="rounded-md md:w-2/4 w-[350px] bg-[rgba(0,0,0,0.8)] mt-20  p-10 h-[500px] backdrop-blur-sm">
        <h1 class="text-2xl font-bold">Create Student class</h1>
          <label for="">Classname</label>
          <div class="my-3">
            <input type="text" placeholder="class " required class="h-8 w-full pl-3 text-black"/>
            <p class="text-gray-500">Numerix example third,fourth</p>
          </div>
          <label for="">Classname in Numeric</label>
          <div class="my-3">
            <input type="text" placeholder="class" required  class="h-8 w-full pl-3 text-black "/>
            <p class="text-gray-500">Eg, 2,3,4,5</p>
          </div>
          <label for="">Section</label>
          <div class="my-3">
            <input type="text" placeholder="section" required  class="h-8 w-full pl-3 text-black"/>
            <p class="text-gray-500">Eg,A,B,C etc</p>
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

import React from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/background-2354151_1280.jpg"
const AddSubjectCombination = () => {
  return (
    <>
               <div className="row md:flex md:justify-around align-center">

                  <Dashboard/>
            

        <div class="col w-full  flex justify-center text-white " style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
         
            <form class="rounded-md md:w-8/12 w-[380px] bg-[rgba(0,0,0,0.8)] mt-24  p-10 md:h-[300px] h-[400px] backdrop-blur-sm">
            <h1 class="text-2xl font-bold text-white">Add Subject Combination</h1>
            <div class="flex justify-between my-5" > 
                <label for="">Class</label>
                <div>
                    <select name="" id="" class="h-8 md:w-96 w-52 pl-3 text-black" >
                        <option value="">Select Class</option>
                        <option value="">First section A</option>
                        <option value="">Second section C</option>
                        <option value="">Tenth section C</option>
                        <option value="">Second section C</option>
                        <option value="">Fourth section B</option>
                    </select>
                 </div>
            </div>
           
            <div class="flex justify-between my-8">
                <label for="">Subject Code</label>
                <div>
                    <select name="" id="" class="h-8 md:w-96 w-52 pl-3 text-black">
                        <option value="">Select Subject</option>
                        <option value="">Maths</option>
                        <option value="">Chemistry</option>
                        <option value="">Physics</option>
                        <option value="">Computer Science</option>
                        <option value="">Maths</option>
                    </select>
                 </div>
  
            </div>
            
              <div class="flex justify-between">
                 <div></div>
                <button type="submit" class="bg-green-600 text-white p-2">Add<i class="fa-solid fa-check ml-3"></i></button>
              </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default AddSubjectCombination

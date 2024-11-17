import React from 'react'
import Dashboard from '../Components/Dashboard';
import img1 from "../assets/image/background-2354151_1280.jpg"
const CreateSubject = () => {
  return (
    <>
          <div className="row md:flex md:justify-around align-center">

       <Dashboard/>

          
        <div className="col w-full md:h-[626px]   h-[600px] flex justify-center text-white  " style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}} >
         
            <form className="rounded-md md:w-8/12 w-[380px] bg-[rgba(0,0,0,0.8)] mt-24  p-10 md:h-[300px] h-[400px] backdrop-blur-sm">
            <h1 className="text-2xl font-bold">Create Subjects</h1>
            <div className="flex justify-between my-5" > 
                <label for="">Subject Name</label>
                <div>
                  <input type="text" placeholder="Subject Name " required className="h-8 md:w-96 w-52 pl-3 text-black"/>
                </div>
            </div>
           
            <div className="flex justify-between my-8">
                <label for="">Subject Code</label>
                <div>
                  <input type="text" placeholder="Subject Code" required  className="h-8 md:w-96 w-52 pl-3 "/>
                </div>
  
            </div>
            
              <div className="flex justify-between">
                 <div></div>
                <button type="submit" className="bg-green-600 text-white p-2">submit<i className="fa-solid fa-check ml-3"></i></button>
              </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default CreateSubject

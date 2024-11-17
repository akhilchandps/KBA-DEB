import React from 'react'

const UpdateSubject = () => {
  return (
    <>
        <div class="row md:flex md:justify-around align-center">
            
        <div className="col">
       <Dashboard/>
        </div>


      <div class="col w-full  md:h-[626px] flex justify-center text-white  bg-[url(./image/background-2354151_1280.jpg)] bg-cover " >
         
         <form class="rounded-md md:w-8/12 w-[370px] bg-[rgba(0,0,0,0.8)] md:mt-24  mt-12 m-3  p-10   md:h-[300px] backdrop-blur-sm">
         <h1 class="text-2xl font-bold ">Update Subjects</h1>
         <div class="flex justify-between my-5" > 
             <label for="">Subject Name</label>
             <div>
               <input type="text" placeholder="Subject Name " required class="h-8 md:w-96 w-52 pl-3 text-black"/>
             </div>
         </div>
        
         <div class="flex justify-between my-8">
             <label for="">Subject Code</label>
             <div>
               <input type="text" placeholder="Subject Code" required  class="h-8 md:w-96 w-52 pl-3  text-black"/>
             </div>
 
         </div>
         
           <div class="flex justify-between">
              <div></div>
             <button type="submit" class="bg-green-600 text-white p-2">Update<i class="fa-solid fa-check font-bold ml-3"></i></button>
           </div>
         </form>
     </div>
      </div>
    </>
  )
}

export default UpdateSubject

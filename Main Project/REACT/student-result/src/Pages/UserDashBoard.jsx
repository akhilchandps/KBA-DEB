import React from 'react'

const UserDashBoard = () => {
  return (
    <>
          <div className="row md:flex md:justify-around align-center">
      
    

      <div className="col md:w-80 w-full  bg-[#024550] md:h-[101vh] h-[600px]">
          <div className="flex md:justify-between justify-center md:mt-14 mb-5 w-[165px] md:m-5">
            <div className="w-12">
              <img src="./image/uuuu.jpg" className="w-full rounded-full" alt=""/>
            </div>
            <a href="./Dashboard.html" className="text-3xl font-bold text-white text-center">User</a>
          </div> 
          <hr/>
          <div className="dropdown flex flex-col items-center md:flex-row">
            <button className="dropbtn md:text-xl text-sm font-bold  text-white "><i className="fa-solid fa-landmark mx-5 text-white"></i>Student classNamees</button>
            <div className="dropdown-content">
              <div>
              
              </div>
            
            </div>
          </div>


        </div>
 
{/* <!-- //col --> */}

      <div className="col w-full bg-[url(./image/377105-PBR732-669.jpg)] md:bg-cover  ">
          <div className=" flex justify-center ">
         
              <form className="w-3/5 col bg-[rgba(255,255,255,0.8)] p-10 mt-20">
                  <div className="my-4 text-2xl text-center font-bold">
                      <h1>School result Management System</h1>
                  </div>
            
                  <label for="">Enter Roll No Id</label>
                  <div className="my-3">
                      <input type="text" className="w-full h-8 pl-5" placeholder="Enter your roll no Id"/>
                  </div>
                  <label for="">className</label>
                  <div className="my-3">
                    <select name="" id="" className="w-full h-8 pl-5">
                      <option value="" selected>Select className</option>
                      <option value="">Fourth sectionc</option>
                      <option value="">Third Section A</option>
                      <option value="">Tenth Section B</option>
                      <option value="">Third Section C</option>
                    </select>
                  </div>
  
                  <div className=" flex justify-end">
                      <button className="bg-green-500 text-white px-3 py-1"><a href="./Result.html">Search</a></button>
                  </div>
                  <div>
                      <button className="bg-black text-white p-2"><a href="./home.html">Back to home</a></button>
                  </div>
              </form>
          </div>
           </div>

  </div>
    </>
  )
}

export default UserDashBoard

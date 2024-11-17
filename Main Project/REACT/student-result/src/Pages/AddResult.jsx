import React from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/result-3236285_1280.jpg"
const AddResult = () => {
  return (
    <>
             <div className="row md:flex md:justify-around align-center">

<Dashboard/>
<div className="col flex justify-center w-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
            <form className="w-[670px] bg-[rgba(255,255,255,0.8)] p-5 h-[500px] mt-20">
                <div>
                    <h1 className="text-3xl font-bold text-[#024550]">Declare Result</h1>
                </div>
                <div className="flex justify-between my-5">
                    <label for="">className</label>
                    
                        <select name="" id="" className="w-[500px] h-8">
                            <option value="">Tenth A</option>
                            <option value="">Fouth C</option>
                            <option value="">Third B</option>
                        </select>
                  
                 
                </div>

                <div className="flex justify-between my-5">
                    <label for="">Student name</label>
                    <div>
                        <input type="text" placeholder="Student name" className="w-[500px] h-8"/>
                    </div>
                </div>
                
                <div className="flex justify-between my-5 ">
                    <label for="">Subjects</label>

                    <div>
                        <div className="my-5">
                            <p>Physics</p>
                            <input type="text" placeholder="Enter mark out of 100" className="w-[500px] h-8"/>
                        </div>
                        <div className="my-5">
                            <p>Chemistry</p>
                            <input type="text" placeholder="Enter mark out of 100" className="w-[500px] h-8"/>
                        </div>
                        <div className="my-5">
                            <p>Maths</p>
                            <input type="text" placeholder="Enter mark out of 100" className="w-[500px] h-8"/>
                        </div>
                     
    
                        <div className="my-5">
                            <button className="bg-blue-500 text-white px-3 py-2">Declare result</button>
                        </div>
                    </div>
                



                </div>
            </form>
        </div>
</div>
        
    </>
  )
}

export default AddResult

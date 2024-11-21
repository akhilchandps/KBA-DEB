import React from 'react'
import { Link } from 'react-router-dom'

const ManageClass = () => {
  return (
    <>
         <div class="row md:flex md:justify-around align-center">
        <div className="col">
       <Dashboard/>
        </div>

       <div class="col   md:w-full bg-[url(./image/pexels-moose-photos-170195-1037995.jpg)] bg-cover">
        <h1 class="text-3xl font-bold my-5  ml-12 text-[#024550]">VIEW CLASSES INFO</h1>
        <table class=" border border-2    md:m-auto bg-[rgba(255,255,255,0.8)] md:mt-20 shadow-md shadow-black-600 ">
            <tr>
                <th class="text-center md:p-5 p-2 border">Sl No</th>
                <th class="text-center  md:p-5 p-2  border">Class Name</th>
                <th class="text-center  md:p-5 p-2  border">Class Name Numeric</th>
                <th class="text-center md:p-5 p-2  border">Section</th>
                <th class="text-center md:p-5 p-2  border">Creation Date</th>
                <th class="text-center md:p-5 p-2  border">Action</th>
            
            </tr>

            <tr>
                <td class="text-center md:p-5 p-2  border">1</td>
                <td class="text-center md:p-5 p-2  border">Tenth</td>
                <td class="text-center md:p-5 p-2  border">10</td>
                <td class="text-center md:p-5 p-2  border">C</td>
                <td class="text-center md:p-5 p-2  border">2024-02-16</td>
                <td class="text-center md:p-5 p-2  border flex justify-between">
                    <Link href="/UpdateClass"><i class="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
                    <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                  </td>
            </tr>

            <tr>
                <td class="text-center md:p-5 p-2  border">1</td>
                <td class="text-center md:p-5 p-2  border">Tenth</td>
                <td class="text-center md:p-5 p-2  border">10</td>
                <td class="text-center md:p-5 p-2  border">C</td>
                <td class="text-center md:p-5 p-2  border">2024-02-16</td>
                <td class="text-center md:p-5 p-2  border  flex justify-between">
                <Link href="/UpdateClass"><i class="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
                <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                  </td>
            </tr>

            <tr>
                <td class="text-center md:p-5 p-2  border">2</td>
                <td class="text-center  md:p-5 p-2 border">Tenth</td>
                <td class="text-center  md:p-5 p-2 border">10</td>
                <td class="text-center  md:p-5 p-2 border">C</td>
                <td class="text-center  md:p-5 p-2 border">2024-02-16</td>
                <td class="text-center  md:p-5 p-2 border  flex justify-between">
                <Link href="/UpdateClass"><i class="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
                <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                  </td>
            </tr>

            <tr>
                <td class="text-center  md:p-5 p-2 border">1</td>
                <td class="text-center  md:p-5 p-2 border">Tenth</td>
                <td class="text-center  md:p-5 p-2 border">10</td>
                <td class="text-center  md:p-5 p-2 border">C</td>
                <td class="text-center  md:p-5 p-2 border">2024-02-16</td>
                <td class="text-center  md:p-5 p-2 border  flex justify-between">
                <Link href="/UpdateClass"><i class="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
                <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                </td>
                
            </tr>

            <tr>
                <td class="text-center  md:p-5 p-2border">5</td>
                <td class="text-center  md:p-5 p-2 border">Tenth</td>
                <td class="text-center  md:p-5 p-2 border">10</td>
                <td class="text-center  md:p-5 p-2 border">C</td>
                <td class="text-center  md:p-5 p-2 border">2024-02-16</td>
                <td class="text-center md:p-5 p-2 border  flex justify-between">
                <Link href="/UpdateClass"><i class="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
                <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                  </td>
            </tr>
        </table>
          </div>
          </div>
          
          </>
     
 
    
  )
}

export default ManageClass

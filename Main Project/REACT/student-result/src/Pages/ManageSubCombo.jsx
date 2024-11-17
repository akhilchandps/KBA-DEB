import React from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/pexels-moose-photos-170195-1037995.jpg"
const ManageSubCombo = () => {
  return (
    <>
       <div class="row md:flex md:justify-around align-center">

<Dashboard/>
<div class="col w-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
            <h1 class="text-3xl font-bold my-5  ml-12 text-[#024550]">MANAGE SUBJECTS</h1>
            <table class="border border-2 m-auto bg-[rgba(255,255,255,0.8)] mt-20 shadow-md shadow-black-600 ">
                <tr>
                    <th class="text-center p-5 border">Sl No</th>
                    <th class="text-center p-5 border">Class and Section</th>
                    <th class="text-center p-5 border">Subject</th>
                    <th class="text-center p-5 border">Status</th>
                    <th class="text-center p-5 border">Action</th>
                
                </tr>
    
                <tr>
                    <td class="text-center p-5 border">1</td>
                    <td class="text-center p-5 border">First section A</td>
                    <td class="text-center p-5 border">Chemistry</td>
                    <td class="text-center p-5 border">2024-02-16</td>
                    <td class="text-center p-5 border flex justify-between">
                        <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
    
                <tr>
                    <td class="text-center p-5 border">1</td>
                    <td class="text-center p-5 border">First section C</td>
                    <td class="text-center p-5 border">Chemistry</td>
                    <td class="text-center p-5 border">2024-02-16</td>
                    <td class="text-center p-5 border flex justify-between">
                        <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
    
                <tr>
                    <td class="text-center p-5 border">2</td>
                    <td class="text-center p-5 border">Third Section C</td>
                    <td class="text-center p-5 border">Physics</td>
                    <td class="text-center p-5 border">2024-02-16</td>
                    <td class="text-center p-5 border flex justify-between">
                        <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
    
                <tr>
                    <td class="text-center p-5 border">1</td>
                    <td class="text-center p-5 border">Fourth Section C</td>
                    <td class="text-center p-5 border">Chemistry</td>
                    <td class="text-center p-5 border">2024-02-16</td>
                    <td class="text-center p-5 border flex justify-between">
                        <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                    
                </tr>
    
                <tr>
                    <td class="text-center p-5 border">5</td>
                    <td class="text-center p-5 border">Second section A</td>
                    <td class="text-center p-5 border">SC13</td>
                    <td class="text-center p-5 border">2024-02-16</td>
                    <td class="text-center p-5 border flex justify-between">
                        <button><i class="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
            </table>
        </div>
</div>
    </>
  )
}

export default ManageSubCombo

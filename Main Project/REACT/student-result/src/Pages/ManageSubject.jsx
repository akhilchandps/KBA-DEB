import React from 'react'
import Dashboard from '../Components/Dashboard';
import img1 from  "../assets/image/pexels-moose-photos-170195-1037995.jpg"
const ManageSubject = () => {
  return (
    <>
         <div className="row md:flex md:justify-around align-center">

 
       <Dashboard/>
    
        <div className="col w-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
            <h1 className="text-3xl font-bold my-5  ml-12 text-[#024550]">MANAGE SUBJECTS</h1>
            <table className="border border-2 m-auto bg-[rgba(255,255,255,0.8)] mt-20 shadow-md shadow-black-600 ">
                <tr>
                    <th className="text-center p-5 border">Sl No</th>
                    <th className="text-center p-5 border">Subject Name</th>
                    <th className="text-center p-5 border">Subject Code</th>
                    <th className="text-center p-5 border">Creation Date</th>
                    <th className="text-center p-5 border">Action</th>
                
                </tr>
    
                <tr>
                    <td className="text-center p-5 border">1</td>
                    <td className="text-center p-5 border">Maths</td>
                    <td className="text-center p-5 border">MATH01</td>
                    <td className="text-center p-5 border">2024-02-16</td>
                    <td className="text-center p-5 border flex justify-between">
                        <a href="./updateSubject.html"><i className="fa-solid fa-pen-to-square text-yellow-500"></i></a>
                        <button><i className="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
    
                <tr>
                    <td className="text-center p-5 border">1</td>
                    <td className="text-center p-5 border">Physics</td>
                    <td className="text-center p-5 border">PHY06</td>
                    <td className="text-center p-5 border">2024-02-16</td>
                    <td className="text-center p-5 border flex justify-between">
                        <a href="./updateSubject.html"><i className="fa-solid fa-pen-to-square text-yellow-500"></i></a>
                        <button><i className="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
    
                <tr>
                    <td className="text-center p-5 border">2</td>
                    <td className="text-center p-5 border">Chemistry</td>
                    <td className="text-center p-5 border">CHEM10</td>
                    <td className="text-center p-5 border">2024-02-16</td>
                    <td className="text-center p-5 border flex justify-between">
                        <a href="./updateSubject.html"><i className="fa-solid fa-pen-to-square text-yellow-500"></i></a>
                        <button><i className="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
    
                <tr>
                    <td className="text-center p-5 border">1</td>
                    <td className="text-center p-5 border">English</td>
                    <td className="text-center p-5 border">ENG10</td>
                    <td className="text-center p-5 border">2024-02-16</td>
                    <td className="text-center p-5 border flex justify-between">
                        <a href="./updateSubject.html"><i className="fa-solid fa-pen-to-square text-yellow-500"></i></a>
                        <button><i className="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                    
                </tr>
    
                <tr>
                    <td className="text-center p-5 border">5</td>
                    <td className="text-center p-5 border">Science</td>
                    <td className="text-center p-5 border">SC13</td>
                    <td className="text-center p-5 border">2024-02-16</td>
                    <td className="text-center p-5 border flex justify-between">
                        <a href="./updateSubject.html"><i className="fa-solid fa-pen-to-square text-yellow-500"></i></a>
                        <button><i className="fa-solid fa-xmark text-rose-600"></i></button>
                      </td>
                </tr>
            </table>
        </div>
        </div>
    </>
  )
}

export default ManageSubject

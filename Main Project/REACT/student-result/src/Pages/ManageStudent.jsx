import React, { useEffect, useState } from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/pexels-moose-photos-170195-1037995.jpg";
import { Link } from 'react-router-dom';


const ManageStudent = () => {

  const [datas,setDatas] = useState([])

  const getAllStudent = async()=>{
     
    const response = await fetch("http://127.0.0.1:5000/getStudents",{
      method:"GET",
      credentials:"include"
    })
    console.log(response);
    const data = await response.json();
    console.log(data);
    setDatas(data)
    
  }

  useEffect(()=>{
    getAllStudent()
  },[])


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/deleteStudent/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        alert("Student deleted successfully!");
       getAllStudent();
      } else {
        alert("Failed to delete the student!");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the student");
    }
  };

  return (
    <>
          <div class="row md:flex md:justify-around align-center">
     
       <Dashboard/>
 

        <div class="col w-full " style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
            <h1 class="text-3xl font-bold my-5  ml-12 text-[#024550]">MANAGE STUDENTS</h1>
            <table class="border border-2 m-auto bg-[rgba(255,255,255,0.8)] mt-20 shadow-md shadow-black-600 ">
              <thead>
               
              <tr>
                    <th class="text-center p-5 border">Sl No</th>
                    <th class="text-center p-5 border">Student Name</th>
                    <th class="text-center p-5 border">Roll Id</th>
                    <th class="text-center p-5 border">Class</th>
                    <th class="text-center p-5 border">DOB</th>
                    <th class="text-center p-5 border">Action</th>

                    
                
                </tr>

              </thead>
             <tbody>
     {     
            datas.length>0?(datas.map((item,index)=>(
              <tr key={index}>
              <td class="text-center p-5 border">{index+1}</td>
              <td class="text-center p-5 border">{item.FullName}</td>
              <td class="text-center p-5 border">{item.RollId}</td>
              <td class="text-center p-5 border">{item.Class}</td>
              <td class="text-center p-5 border">{item.DOB}</td>
              <td class="text-center p-5 border flex justify-between">
                  <Link to={`/UpdateStudent/${item.RollId}`}><i class="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
                  <button onClick={() => handleDelete(item.RollId)}>
                        <i className="fa-solid fa-xmark text-rose-600"></i>
                      </button>
                </td>
             
          </tr>
            ))):(
              <tr>
                <td colSpan="5" className="text-center p-5 border">No subject combinations available</td>
              </tr>
            )
    }
         
             </tbody>
    

            </table>
        </div>
        </div>
    </>
  )
}

export default ManageStudent

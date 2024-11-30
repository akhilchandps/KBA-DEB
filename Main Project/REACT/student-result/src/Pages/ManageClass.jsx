import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'

const ManageclassName = () => {

  const [datas, setDatas] = useState([]);

  const getAllclassNamees = async () => {
    const response = await fetch("http://127.0.0.1:5000/getClasses", {
      method: "GET",
      credentials:"include"
    });
    console.log(response);
    
    const data = await response.json();
    console.log(data);
    setDatas(data)
    
    setDatas(data);
  };

  useEffect(() => {
    getAllclassNamees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/deleteClass/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        alert("Class deleted successfully!");
       getAllclassNamees();
      } else {
        alert("Failed to delete class.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the subject combination.");
    }
  };
  return (
    <>
         <div className="row md:flex md:justify-around align-center">
   
       <Dashboard/>
  

       <div className="col  md:w-full bg-[url(./image/pexels-moose-photos-170195-1037995.jpg)] bg-cover">
        <h1 className="text-3xl font-bold my-5  ml-12 text-[#024550]">VIEW className3</h1>
        <table className=" border border-2    md:m-auto bg-[rgba(255,255,255,0.8)] md:mt-20 shadow-md shadow-black-600 ">
          <thead>
          <tr>
                <th className="text-center md:p-5 p-2 border">Sl No</th>
                <th className="text-center  md:p-5 p-2  border">className Name</th>
                <th className="text-center  md:p-5 p-2  border">className Name Numeric</th>
                <th className="text-center md:p-5 p-2  border">Section</th>
                <th className="text-center md:p-5 p-2  border">Creation Date</th>
                <th className="text-center md:p-5 p-2  border">Action</th>
            
            </tr>
          </thead>
         
           <tbody>
   {     
     datas.length>0?(datas.map((item,index)=>(
      <tr key={index}>
      <td className="text-center md:p-5 p-2  border">{index+1}</td>
      <td className="text-center md:p-5 p-2  border">{item.className}</td>
      <td className="text-center md:p-5 p-2  border">{item.classNumeric}</td>
      <td className="text-center md:p-5 p-2  border">{item.Section}</td>
      <td className="text-center md:p-5 p-2  border">{item.Date}</td>
      <td className="text-center md:p-5 p-2  border flex justify-between">
          <Link to={`/UpdateClass/${item._id}`}><i className="fa-solid fa-pen-to-square text-yellow-500"></i></Link>
          <button onClick={()=>handleDelete(item.className)}><i className="fa-solid fa-xmark text-rose-600"></i></button>
        </td>
  </tr>
     ))):("No Data")
}

           </tbody>
      
        

       
        </table>
          </div>
          </div>
          
          </>
     
 
    
  )
}

export default ManageclassName

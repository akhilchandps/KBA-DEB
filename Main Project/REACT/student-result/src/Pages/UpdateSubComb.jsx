import React, { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard';
import img1 from "../assets/image/background-2354151_1280.jpg";
import { useParams } from 'react-router-dom';

const UpdateSubComb = () => {

   const {id} = useParams();
   console.log(id);
   
    const [datas, setDatas] = useState([]);
    const [subjectData, setSubjectData] = useState("");
    const [className, setClassName] = useState(""); // To store selected class
    const [subjectName, setSubjectName] = useState(""); 
    


    const getAllclassName = async () => {
        try {
          const response = await fetch("http://127.0.0.1:5000/getClasses", {
            method: "GET",
            credentials: "include"
          });
          const data = await response.json();
          setDatas(data); 
        } catch (error) {
          console.error("Error fetching classes:", error);
        }
      };
    
      const getOneSubcomb = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/getOneSubComb/${id}`, {
            method: "GET",
            credentials:"include"
          });
          const data = await response.json();
          setSubjectData(data);
        } catch (error) {
          console.error("Error fetching subjects:", error);
        }
      };


    const handleUpdate = async(e)=>{
        e.preventDefault();

        const res = await fetch(`http://127.0.0.1:5000/UpdateAddSubjectCombination/${id}`,{
            method:"PATCH",
            credentials:"include"
        })
        console.log(res);
        
    }



   useEffect(()=>{
    getAllclassName();
  getOneSubcomb();
   },[id])
  return (
    <>
          <div className="row md:flex md:justify-around align-center">
      <Dashboard />
      <div className="col w-full flex justify-center text-white" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
        <form  onSubmit={handleUpdate} className="rounded-md md:w-8/12 w-[380px] bg-[rgba(0,0,0,0.8)] mt-24 p-10 md:h-[300px] h-[400px] backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-white">Update Subject Combination</h1>
          <div className="flex justify-between my-5">
            <label htmlFor="className">Class</label>
            <div>
              <select
                id="className"
                className="h-8 md:w-96 w-52 pl-3 text-black"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              >
                <option value="">Select Class</option>
                {datas.length > 0 && datas.map((item, index) => (
                  <option key={index} value={item.className}>
                    {item.className}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between my-8">
            <label htmlFor="subjectName">Subject Name</label>
            <div>
              <select
                id="subjectName"
                className="h-8 md:w-96 w-52 pl-3 text-black"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              >
                <option value="">Select Subject</option>
                {subjectData.length > 0 && subjectData.map((item, index) => (
                  <option key={index} value={item.SubjectName}>
                    {item.SubjectName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between">
            <div></div>
            <button type="submit" className="bg-green-600 text-white p-2">
              Add <i className="fa-solid fa-check ml-3"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateSubComb

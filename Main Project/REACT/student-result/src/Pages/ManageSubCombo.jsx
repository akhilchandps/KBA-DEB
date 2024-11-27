import React, { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard';
import img1 from "../assets/image/pexels-moose-photos-170195-1037995.jpg";

const ManageSubCombo = () => {
  const [datas, setDatas] = useState([]);

  const getSubjectCombo = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getSubjectCombinations", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubjectCombo();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/deleteSubjectCombination/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        alert("Subject combination deleted successfully!");
        getSubjectCombo(); 
      } else {
        alert("Failed to delete the subject combination.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the subject combination.");
    }
  };

  return (
    <>
      <div className="row md:flex md:justify-around align-center">
        <Dashboard />
        <div className="col w-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
          <h1 className="text-3xl font-bold my-5 ml-12 text-[#024550]">MANAGE SUBJECTS</h1>
          <table className="border border-2 m-auto bg-[rgba(255,255,255,0.8)] mt-20 shadow-md shadow-black-600 ">
            <thead>
              <tr>
                <th className="text-center p-5 border">Sl No</th>
                <th className="text-center p-5 border">Class and Section</th>
                <th className="text-center p-5 border">Subject</th>
                <th className="text-center p-5 border">Status</th>
                <th className="text-center p-5 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.length > 0 ? (
                datas.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center p-5 border">{index + 1}</td>
                    <td className="text-center p-5 border">{item.class}</td>
                    <td className="text-center p-5 border">{item.subject}</td>
                    <td className="text-center p-5 border">2024-02-16</td>
                    <td className="text-center p-5 border flex justify-between">
                      <button onClick={() => handleDelete(item._id)}>
                        <i className="fa-solid fa-xmark text-rose-600"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-5 border">No subject combinations available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageSubCombo;

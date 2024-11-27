import React, { useEffect, useState } from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/result-3236285_1280.jpg"
const AddResult = () => {

 const [datas,setDatas] = useState("")
    const getAllclassName = async () => {
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
        getAllclassName();
      }, []);



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
                    <label htmlFor="">className</label>
                    
                        <select name="" id="" className="w-[500px] h-8">
                            <option value="">Select</option>
                            {
                              datas.length > 0 ? (datas.map((item,index)=>(
                                <option value="" key={index}>{item.className}</option>
                              ))):""
                            }
                        </select>
                  
                 
                </div>

                <div className="flex justify-between my-5">
                    <label for="">Student name</label>
                    <div>
                    <select name="" id="" className="w-[500px] h-8">
                  <option value="">Select category</option>
                    <option value="">Fouth C</option>
                    <option value="">Third B</option>
                  </select>
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






// import React, { useEffect, useState } from 'react';
// import Dashboard from '../Components/Dashboard';
// import img1 from "../assets/image/result-3236285_1280.jpg";

// const AddResult = () => {
//   const [classes, setClasses] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [subjects, setSubjects] = useState([]);
//   const [className, setClassName] = useState("");
//   const [studentName, setStudentName] = useState("");
//   const [marks, setMarks] = useState({});

//   // Fetch all classes
//   const getAllClassNames = async () => {
//     const response = await fetch("http://127.0.0.1:5000/getClasses", {
//       method: "GET",
//       credentials: "include",
//     });
//     const data = await response.json();
//     setClasses(data);
//   };

//   // Fetch students for a selected class
//   const getStudentsByClass = async (className) => {
//     const response = await fetch(`http://127.0.0.1:5000/getStudents/${className}`, {
//       method: "GET",
//       credentials: "include",
//     });
//     const data = await response.json();
//     setStudents(data);
//   };

//   // Fetch subjects for a selected class
//   const getSubjectsByClass = async (className) => {
//     const response = await fetch(`http://127.0.0.1:5000/getSubjectsByClass/${className}`, {
//       method: "GET",
//       credentials: "include",
//     });
//     const data = await response.json();
//     setSubjects(data);
//   };

//   // Handle class change
//   const handleClassChange = (e) => {
//     const selectedClass = e.target.value;
//     setClassName(selectedClass);
//     setStudentName(""); // Clear student name
//     setMarks({}); // Clear previously entered marks
//     if (selectedClass) {
//       getStudentsByClass(selectedClass); // Get students for the selected class
//       getSubjectsByClass(selectedClass); // Get subjects for the selected class
//     }
//   };

//   // Handle student name change
//   const handleStudentChange = (e) => {
//     setStudentName(e.target.value);
//   };

//   // Handle mark input change
//   const handleMarkChange = (e, subject) => {
//     const value = e.target.value;
//     setMarks((prevMarks) => ({
//       ...prevMarks,
//       [subject]: value,
//     }));
//   };

//   // Submit result
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const resultData = {
//       className,
//       studentName,
//       marks,
//     };
//     const response = await fetch("http://127.0.0.1:5000/declareResult", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(resultData),
//       credentials: "include",
//     });
//     const data = await response.json();
//     console.log(data);
//   };

//   useEffect(() => {
//     getAllClassNames(); // Fetch classes on component mount
//   }, []);

//   return (
//     <>
//       <div className="row md:flex md:justify-around align-center">
//         <Dashboard />
//         <div className="col flex justify-center w-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
//           <form onSubmit={handleSubmit} className="w-[670px] bg-[rgba(255,255,255,0.8)] p-5 h-[500px] mt-20">
//             <h1 className="text-3xl font-bold text-[#024550]">Declare Result</h1>

//             <div className="flex justify-between my-5">
//               <label htmlFor="">Class Name</label>
//               <select onChange={handleClassChange} value={className} className="w-[500px] h-8">
//                 <option value="">Select</option>
//                 {classes.length > 0 ? (
//                   classes.map((item, index) => (
//                     <option key={index} value={item.className}>
//                       {item.className}
//                     </option>
//                   ))
//                 ) : (
//                   <option>No classes available</option>
//                 )}
//               </select>
//             </div>

//             <div className="flex justify-between my-5">
//               <label htmlFor="">Student Name</label>
//               <select
//                 onChange={handleStudentChange}
//                 value={studentName}
//                 className="w-[500px] h-8"
//                 disabled={!className}
//               >
//                 <option value="">Select Student</option>
//                 {students.length > 0 ? (
//                   students.map((student, index) => (
//                     <option key={index} value={student.name}>
//                       {student.name}
//                     </option>
//                   ))
//                 ) : (
//                   <option>No students available</option>
//                 )}
//               </select>
//             </div>

//             <div className="flex justify-between my-5">
//               <label htmlFor="">Subjects</label>
//               <div>
//                 {subjects.length > 0 ? (
//                   subjects.map((subject, index) => (
//                     <div key={index} className="my-5">
//                       <p>{subject.SubjectName}</p>
//                       <input
//                         type="number"
//                         placeholder="Enter marks out of 100"
//                         className="w-[500px] h-8"
//                         value={marks[subject.SubjectName] || ''}
//                         onChange={(e) => handleMarkChange(e, subject.SubjectName)}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <p>No subjects available</p>
//                 )}
//               </div>
//             </div>

//             <div className="my-5">
//               <button type="submit" className="bg-blue-500 text-white px-3 py-2">Declare Result</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddResult;




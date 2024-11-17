import React from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/377105-PBR732-669.jpg"
import img2 from "../assets/image/creative-7581718_1920.jpg"
import img3 from "../assets/image/creative-7581718_1920.jpg"
import img4 from "../assets/image/texture-7515225_1920.jpg"
const MainDashboard = () => {
  return (
    <div>
        <div className="row md:flex md:justify-around align-center">
       
          <Dashboard/>
       
       
          
        <div className="col w-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}} >
            <h1 className="md:text-4xl text-2xl text-white font-bold py-5 ml-10">DashBoard</h1>
             <div className="roww md:flex  md:justify-center  md:mx-20 ">
                <div className="coll md:w-3/6 w-[300px] h-52 text-white md:text-2xl text-xl md:mr-12 m-auto  " style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <ul className="flex flex-col">
                    <li className="font-bold flex text-3xl  justify-end mt-12 mr-5">14</li>
                    <li className="font-bold flex justify-end mt-12 mr-5">Reg Users</li>
                  </ul>
                </div>

                <div className="coll md:w-3/6 w-[300px] h-52 text-white md:text-2xl text-xl   m-auto  " style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <ul>
                    <li className="font-bold flex text-3xl  justify-end mt-12 mr-5 obj">10</li>
                    <li className="font-bold flex justify-end mt-12 mr-5 obj">Subjects Listed</li>
                  </ul>
             </div>
             </div>


             <div className="roww md:flex md:justify-center mt-5 md:mx-20 ">

                <div className="coll  md:w-3/6 w-[300px] h-52 text-white md:text-2xl text-xl  md:mr-12 m-auto bg-cover"  style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <ul>
                    <li className="font-bold flex text-3xl justify-end mt-12 mr-5">6</li>
                    <li className="font-bold flex justify-end mt-12 mr-5">Total classNamees Listed</li>
                  </ul>
                  </div>
                <div className="coll bg-[url(https://cdn.pixabay.com/photo/2016/02/03/16/55/background-1177450_640.jpg)] md:w-3/6 w-[300px] h-52 text-white md:text-2xl text-xl  m-auto ">
                  <ul>
                    <li className="font-bold flex text-3xl  justify-end mt-12 mr-5">4</li>
                    <li className="font-bold flex justify-end mt-12 mr-5">Results decalred</li>
                  </ul>
                </div>        
             </div>

        </div>
          </div>
      
          

        </div>

  )
}

export default MainDashboard

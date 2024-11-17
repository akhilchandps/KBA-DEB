import React from 'react'
import Dashboard from '../Components/Dashboard'
import img1 from "../assets/image/security-camera-3174223_1280.jpg"
const AdminChangePwd = () => {
  return (
    <>
       <div className="row md:flex md:justify-around align-center">

<Dashboard/>
   
<div className="col flex justify-center  w-full bg-cover" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover'}} >
            <form className="md:w-8/12 w-[370px] bg-[rgba(0,0,0,0.4)] p-12 h-[500px] mt-20 text-white">
              <h1 className="text-3xl font-bold my-5">Admin Change Password</h1>

              <label for="">Current Password</label>
              <div className="my-3">
                <input type="text" placeholder="Enter current password" className="w-full h-8 pl-3"/>

              </div>
              <label for="">New Password</label>
              <div className="my-3">
                <input type="text" placeholder="Enter New password" required className="w-full h-8 pl-3"/>

              </div>
              <label for="">Confirm Password</label>
              <div className="my-3">
                <input type="text" placeholder="Enter Confirm password" required className="w-full h-8 pl-3"/>

              </div>
              <div>
                <button type="submit" className="bg-green-500 px-3 py-1 text-white">Change<i className="fa-solid fa-check text-white font-bold ml-5"></i></button>

              </div>
            </form>
        </div>
</div>
    </>
  )
}

export default AdminChangePwd

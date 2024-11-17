import React from 'react'
import kbalogo from "../assets/images/kbalogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div>
       <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div className='flex items-center'>

            <a href="#" >
                <img className='m-1p-2 size-12' src={kbalogo} alt="logo" />
            </a>
            
        </div>
        <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
           <Link to='/'>Home</Link>
           <Link to='/Courses'>Course</Link>
           <Link to='/contact'>Contact Us</Link>
           <Link to='/addCourse'>Add Course</Link>
           <Link to='/updateCourse/:id'>Update Course</Link>
        </div>
    </div>

    </div>
  )
}

export default Navbar

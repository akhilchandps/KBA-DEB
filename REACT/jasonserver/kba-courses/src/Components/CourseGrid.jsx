import React, { useState } from 'react';
import rp from "../assets/images/rp.png";
import { Link } from 'react-router-dom';

const CourseGrid = ({course}) => {

const [likes,setLikes]=useState(0);
const[showfulldesc,setShowFullDescription]=useState(false)

const getDescription=()=>{

  const maxlength=100;
  if(showfulldesc || course.description.length <= maxlength){
    return course.description 
  }else{
    return course.description.substring(0,maxlength)+'......'
  }
}




  return (
    <div>
          <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
            <h2 className=' font-bold text-lg text-purple-900 '>{course.title}</h2>
            <img src={rp} alt="course thumbnail" class='w-80 h-40 ' />

            <p class='text-black group-hover:text-white my-2 mx-5'>{getDescription()} </p>
            {
              course.description.length >=100 && (
                <button className='text-blue-500 hover:underline mt-2'
                onClick={()=>setShowFullDescription(!showfulldesc)}>
                  {showfulldesc ? 'showless' :'sho More'}
                </button>
              )
            }
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-purple-700" onClick={()=>setLikes(likes+1)}>Likes:{likes}</button>

            <p className='text-black group-hover:text-white my-2 mx-5'>{course.price} </p>
            <Link to={`/allCourse/${course.courseId}`} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">Learn More</Link>
        </div>

    </div>
  )
}

export default CourseGrid

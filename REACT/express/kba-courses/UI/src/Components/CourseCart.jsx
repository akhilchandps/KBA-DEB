import React from 'react'
import CourseGrid from './CourseGrid'

const CourseCart = ({course}) => {
  return (
    <div>
       <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
        {
          course.map((item)=>(
            <CourseGrid key={course.courseId} course={item} />
          ))
        }
  
       </div>
    </div>
  )
}

export default CourseCart

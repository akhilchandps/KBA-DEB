import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CourseGrid from '../Components/CourseGrid';
import coursesData from "../data/courses.json";
import CourseCart from '../Components/CourseCart';
const Courses = () => {
  return (
    <div>
      <MainLayout>
        <h1 className='text-center text-2xl font-bold mt-10'>All Courses</h1>
        <CourseCart  course={coursesData}/>
      </MainLayout>
    </div>
  )
}

export default Courses

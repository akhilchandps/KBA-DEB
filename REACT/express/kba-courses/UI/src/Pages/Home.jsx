import React from 'react'
import Hero from '../Components/Hero'
import CourseCart from '../Components/CourseCart';
import ViewCourses from '../Components/ViewCourses';
import MainLayout from '../layouts/MainLayout';
import courseData from "../data/courses.json"

import Topcourses from '../Components/Topcourses';

const Home = () => {
  const topCourses = courseData.slice(0,3)
  return (
    <div>
   <MainLayout>
  <Hero/>
<Topcourses/>
<CourseCart course={topCourses} />
<ViewCourses/>
</MainLayout>
    </div>
  )
}

export default Home

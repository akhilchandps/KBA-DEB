import React from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import AddCourse from './Pages/AddCourse';
import UpdateCourse from './Pages/UpdateCourse';
import Courses from './Pages/Courses';
import CoursePage from './Pages/CoursePage';



const App = () => {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/updateCourse/:id" element={<UpdateCourse/>} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/addCourse" element={<AddCourse/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/allCourse/:id" element={<CoursePage/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AddBooking from './Components/AddBooking';
import AllBooking from './Components/AllBooking';
import ViewBooking from './Components/ViewBooking';





function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addBooking' element={<AddBooking/>}/>
        <Route path='/allBookings' element={<AllBooking/>}/>
        <Route path='/getBooking/:id' element={<ViewBooking/>}/>



       

      </Routes>
     </Router>
  

    </>
  )
}

export default App

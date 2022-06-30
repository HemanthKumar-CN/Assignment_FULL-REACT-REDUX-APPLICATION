import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import RequiredAuth from '../Components/RequiredAuth'
// import Admin from './Admin'
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingleBook from './SingleBook'

const MainRoutes = () => {
  return (
    <div>
      
    <Routes>
        <Route path='/' element={<Books/>} />
        <Route path='/books/:id' element={ <SingleBook/>} />
        <Route path='/books/:id/edit' element={<RequiredAuth><EditBook/></RequiredAuth> } />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<h1>Page not found</h1>} />
    </Routes>
    </div>
    )
}

export default MainRoutes
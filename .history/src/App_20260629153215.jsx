import React from 'react'
import Login from './component/Navbar/Login'
import Home from './component/Navbar/Home'
import Register from './component/Navbar/Register'
import {Router,Route } from 'react-router-dom'
function App() {
  return (
    <Router>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />

    </Router>
  )
}

     
export default App

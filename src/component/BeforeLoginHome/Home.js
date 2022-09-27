import React from 'react'
import Homecontent from './Homecontent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation';
import Login from './Login';


const Home = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homecontent />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home

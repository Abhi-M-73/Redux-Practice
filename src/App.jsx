import React from 'react'
import User from './Component/User'
import { Routes, Route } from 'react-router-dom'
import Product from './Component/Product'
import Home from './Component/Home'
import Nav from './Component/Nav'

function App() {
  return (
    <div className='h-screen w-screen text-blacK'>
      <Nav />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
      </Routes>


    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from './components/navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Login from './components/pages/Login'
import Signup from './components/pages/signup'
import Success from './components/pages/Success'

const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

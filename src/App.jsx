import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Service from './pages/Service'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Router>

      <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='service' element={<Service />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

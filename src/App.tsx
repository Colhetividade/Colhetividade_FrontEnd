import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


import reactLogo from './assets/react.svg'

import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Educacao from './pages/educacao/Educacao'

import './App.css'

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />


      <Educacao />
      <div style={{ maxHeight: '100vh' }}>
        <Routes>

        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  )
}

export default App

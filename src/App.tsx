import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import CadastroProdutos from './pages/cadastroProdutos/CadastroProdutos'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
       <div style={{ minHeight: '100vh'}}>
     <Routes>
     <Route  path="/CadastroProdutos" element={<CadastroProdutos/>} /> 
    </Routes> 
    </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App

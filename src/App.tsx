import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
       
     <Routes> 
        <Route path="/" element={<Login />} />
     <Route  path="/login" element={<Login />} />
     <Route  path="/cadastro" element={<Cadastro />} />
    </Routes> 
     <Footer/>
    </BrowserRouter>

  )
}

export default App

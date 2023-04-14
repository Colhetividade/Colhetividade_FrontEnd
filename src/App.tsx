import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Login from './pages/login/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
       
     <Routes> 
        <Route path="/" element={<Login />} />
    </Routes> 
    
     <Footer/>
    </BrowserRouter>

  )
}

export default App

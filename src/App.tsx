import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Login from './pages/login/Login'
<<<<<<< HEAD
=======
import Cadastro from './pages/cadastro/Cadastro'
>>>>>>> d31ebfefefd5351b4b4de472d9a200a7fff17207
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
       
     <Routes> 
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
=======
     <Route  path="/login" element={<Login />} />
     <Route  path="/cadastro" element={<Cadastro />} />
>>>>>>> d31ebfefefd5351b4b4de472d9a200a7fff17207
    </Routes> 
    
     <Footer/>
    </BrowserRouter>

  )
}

export default App

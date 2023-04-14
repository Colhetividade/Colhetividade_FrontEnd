import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Produtos from './pages/produtos/Produtos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
       <div style={{ minHeight: '100vh'}}>
     <Routes> 
     <Route  path="/produtos" element={<Produtos/>} />
    </Routes> 
    </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App

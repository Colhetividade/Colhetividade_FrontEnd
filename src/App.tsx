import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Home  from './pages/home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
       <div style={{ minHeight: '100vh'}}>
     <Routes> 
      <Route path="/home" element={<Home/>}></Route>
    </Routes> 
    </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import Aptitude from './Pages/Aptitude'
import Practice from './Pages/Practice'
import MockInterview from './Pages/MockInterview'
import NotFound from './Pages/NotFound'

import Navbar from './Components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Practice" element={<Practice />} />
    <Route path="/Aptitude" element={<Aptitude />} />
    <Route path="/Mock-Interview" element={<MockInterview />} />
  </Routes>



</>
    
    
  )
}

export default App

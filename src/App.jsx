import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Webpages/Home'
import './App.css'
import 'animate.css'
import Footer from './Components/Footer'
import Team from './Webpages/Team'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Error from './Webpages/Error'
import CipherDecipherChallenge from './Webpages/CipherDecipherChallenge'

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='bg-[#03001C] text-white'>
      <BrowserRouter>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/cipher-decipher'
              element={<CipherDecipherChallenge />}
            />
            <Route path='/committee' element={<Team />} />
            <Route path='/*' element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Webpages/Home'
import './App.css'
import 'animate.css'
import Footer from './Components/Footer'
import RegistrationForm from './Components/RegistrationForm'
import Team from './Webpages/Team'

const App = () => {
  return (
    <div className='bg-[#03001C] text-white'>
      <BrowserRouter>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<RegistrationForm />} />
            <Route path='/committee' element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

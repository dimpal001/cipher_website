import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Card = ({ title, desc, img }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (myScrollToElement) => {
    const target = document.getElementById(myScrollToElement)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleNavigation = (myScrollToElement) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: myScrollToElement } })
    } else {
      scrollToSection(myScrollToElement)
    }
  }

  useEffect(() => {
    AOS.init()

    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo)
    }
  }, [location])

  return (
    <div>
      <div
        data-aos='fade-up'
        className='p-10 lg:p-10 md:p-3 group hover:border hover:border-first border border-transparent transition-all duration-500 min-h-[390px] flex flex-col justify-between text-gray-200 border-gray-300 rounded-xl'
        style={{ backgroundColor: 'rgba(103, 97, 237, 0.1)' }}
      >
        <div className='flex justify-center'>
          <img
            src={img}
            className='w-[80px] group-hover:rotate-180 transition-all duration-1000'
            alt=''
          />
        </div>
        <p className='py-5 text-xl text-center font-bold'>{title}</p>
        <p className='text-center text-sm'>{desc}</p>
        <button
          onClick={() => handleNavigation('contact')}
          className='p-1 hover:tracking-wider transition-all duration-300 w-full py-[7px] rounded-lg bg-gradient-to-r mt-5 from-first to-second'
        >
          Contact us
        </button>
      </div>
    </div>
  )
}

export default Card

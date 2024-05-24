import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { useState, useEffect } from 'react'
import FormModal from './FormModal'

const Navbar = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOepn] = useState(false)

  return (
    <div className='pt-5 z-30 top-0 right-0 left-0'>
      <div className='w-[90%] rounded-lg bg-white bg-opacity-5 items-center backdrop-blur-xl mx-auto p-2 px-4 flex justify-between'>
        <div>
          <Link to={'/'}>
            <img src={Logo} className='w-[120px] max-md:w-[70px]' alt='' />
          </Link>
        </div>
        <div className='max-md:hidden'>
          <NavItems />
        </div>
        <div className='md:hidden'>
          <svg
            onClick={() => setIsMenuOepn(true)}
            className='w-[50px]'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g id='Menu / Menu_Alt_02'>
                {' '}
                <path
                  id='Vector'
                  d='M11 17H19M5 12H19M11 7H19'
                  stroke='#004aad'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>{' '}
              </g>{' '}
            </g>
          </svg>
        </div>
        <div className='max-md:hidden'>
          <button
            onClick={() => setIsFormModalOpen(true)}
            className='p-1 lg:p-3 px-4 bg-first text-white font-bold text-lg rounded-lg'
          >
            Join Us
          </button>
        </div>
      </div>
      {isFormModalOpen && (
        <FormModal isOpen={true} onClose={() => setIsFormModalOpen(false)} />
      )}
      {isMenuOpen && (
        <div className='fixed top-10 right-10 z-50 flex items-center justify-center'>
          <div className='fixed inset-0 bg-black opacity-50'></div>
          <div className='relative animate__animated animate__zoomIn animate__faster bg-slate-900 text-white rounded-xl lg:w-[600px] w-60 p-6'>
            <button
              className='absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-gray-700'
              onClick={() => setIsMenuOepn(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 text-primary w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className='p-3 pt-8'>
              <div className='flex flex-col gap-4'>
                <NavItems
                  closeMenu={() => setIsMenuOepn(false)}
                  onModalOpen={() => {
                    setIsFormModalOpen(true)
                    setIsMenuOepn(false)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const NavItems = ({ closeMenu, onModalOpen }) => {
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
      closeMenu()
    } else {
      scrollToSection(myScrollToElement)
      closeMenu()
    }
  }

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo)
    }
  }, [location])

  return (
    <div className='flex max-md:flex-col text-lg lg:items-center max-md:gap-3 gap-7'>
      <div
        onClick={() => handleNavigation('about')}
        className='hover:text-second hover:tracking-wider cursor-pointer transition-all duration-300'
      >
        About
      </div>
      <div
        onClick={() => handleNavigation('events')}
        className='hover:text-second hover:tracking-wider cursor-pointer transition-all duration-300'
      >
        Events
      </div>
      <div
        onClick={() => handleNavigation('gallery')}
        className='hover:text-second hover:tracking-wider cursor-pointer transition-all duration-300'
      >
        Gallery
      </div>
      <Link
        onClick={closeMenu}
        to={'/committee'}
        className='hover:text-second hover:tracking-wider cursor-pointer transition-all duration-300'
      >
        Committee
      </Link>
      <div
        onClick={() => handleNavigation('contact')}
        className='hover:text-second hover:tracking-wider cursor-pointer transition-all duration-300'
      >
        Contact
      </div>
      <button
        onClick={onModalOpen}
        className='p-1 md:hidden lg:p-3 px-4 bg-first text-white font-bold text-lg rounded-lg'
      >
        Join Us
      </button>
    </div>
  )
}

export default Navbar

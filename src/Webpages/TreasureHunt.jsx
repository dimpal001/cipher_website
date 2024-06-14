import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Poster from '../assets/Web.png'

const TreasureHunt = () => {
  //script.google.com/macros/s/AKfycbx3gHnOAO6IiG01qjFOuWFFxo5Ikzo0zPB8dgHg73ayeT0tqXPj81hW5v8ovmfeLWxg/exec
  document.title = 'Treasure Hunt 2.0 | Cipher'
  const navigate = useNavigate()

  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      setIsSending(true)
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbx3gHnOAO6IiG01qjFOuWFFxo5Ikzo0zPB8dgHg73ayeT0tqXPj81hW5v8ovmfeLWxg/exec',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response.data)
      e.target.reset()
      const generatedNumber = generateAlphanumeric(12)
      navigate(`/treasure-hunt/success/${generatedNumber}`)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSending(false)
    }
  }

  const generateAlphanumeric = (length) => {
    const chars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  setTimeout(() => {
    scrollToForm()
  }, 1500)

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form')
    formElement.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='min-h-[calc(100vh-50px)] text-xl p-4 flex flex-col items-center'>
      <div className='flex mb-4 mt-5 items-baseline gap-5'>
        <h1 className='text-6xl animate__fadeInUp animate__animated max-md:text-center max-md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500'>
          Treasure Hunt 2.0{' '}
        </h1>
        <span className='max-md:hidden'>
          <svg
            onClick={scrollToForm}
            className='w-[45px] cursor-pointer'
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
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#004aad'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
              <path
                d='M12 6V14'
                stroke='#004aad'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
              <path
                d='M15 11L12 14L9 11'
                stroke='#004aad'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
            </g>
          </svg>
        </span>
      </div>
      <div className='flex animate__fadeInUp animate__animated justify-center flex-col lg:px-44 w-full'>
        <div className='bg-red-400 flex justify-center'>
          <img src={Poster} alt='Treasure Hunt Poster' className='w-full' />
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center items-center gap-2 max-md:gap-4 py-5'>
            <p className='text-2x text-center font-extralight'>
              <span className='font-extrabold text-first'>Thank you</span> to
              everyone who registered.{' '}
              <span className='text-orange-600'>
                Registration is now closed
              </span>
              .
            </p>
            <p className='text-2x font-extralight text-center'>
              We extend our best wishes to all the participants. We look forward
              to seeing you on{' '}
              <span className='font-extrabold text-first'>
                Saturday, June 15th, 2024.
              </span>
            </p>
            <p className='font-extralight text-center'>
              Get ready for an exciting and challenging event!
            </p>
          </div>
          {/* <form
            id='registration-form'
            className='w-full bg-zinc-900 p-8 shadow-md'
            onSubmit={handleSubmit}
          >
            <h2 className='text-center text-4xl max-md:text-3xl font-bold pb-8'>
              Registration Form
            </h2>
            <div className='lg:flex max-md:border-b border-zinc-300 max-md:pb-5 max-md:mb-10 justify-around'>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member1_name'
                >
                  Team Member 1{' '}
                  <span className='font-bold'>( Team Leader )</span>
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Leader_Name'
                  id='member1_name'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member1_department'
                >
                  Department
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Leader_Dept'
                  id='member1_department'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member1_year'
                >
                  Year
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Leader_Year'
                  id='member1_year'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
            </div>

            <div className='lg:flex max-md:border-b border-zinc-300 max-md:pb-5 max-md:mb-10 justify-around'>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member2_name'
                >
                  Team Member 2
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member2_Name'
                  id='member2_name'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member2_department'
                >
                  Department
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member2_Dept'
                  id='member2_department'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member2_year'
                >
                  Year
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member2_Year'
                  id='member2_year'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
            </div>

            <div className='lg:flex max-md:border-b border-zinc-300 max-md:pb-5 max-md:mb-10 justify-around'>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member3_name'
                >
                  Team Member 3
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member3_Name'
                  id='member3_name'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member3_department'
                >
                  Department
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member3_Dept'
                  id='member3_department'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member3_year'
                >
                  Year
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member3_Year'
                  id='member3_year'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
            </div>

            <div className='lg:flex max-md:border-b border-zinc-300 max-md:pb-5 max-md:mb-10 justify-around'>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member4_name'
                >
                  Team Member 4
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member4_Name'
                  id='member4_name'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member4_department'
                >
                  Department
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member4_Dept'
                  id='member4_department'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-base mb-2'
                  htmlFor='member4_year'
                >
                  Year
                </label>
                <input
                  autoComplete='off'
                  type='text'
                  name='Member4_Year'
                  id='member4_year'
                  className='appearance-none border-[0.5px] border-zinc-400 focus:border-blue-900 bg-transparent w-full py-2 px-3 text-white focus:outline-none'
                  required
                />
              </div>
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className={`bg-first ${
                  isSending ? 'cursor-not-allowed' : 'cursor-pointer'
                } ${
                  isSending ? 'opacity-[0.5]' : 'opacity-[1]'
                } hover:bg-blue-900 text-white py-2 px-4 w-[250px] mt-2 focus:outline-none focus:shadow-outline`}
              >
                {isSending ? 'Please wait...' : 'Register Team'}
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default TreasureHunt

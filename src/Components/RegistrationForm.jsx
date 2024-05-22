import { useEffect, useState } from 'react'
import Poster from '../assets/poster.svg'
import axios from 'axios'

const RegistrationForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      setIsSent(false)
      setIsSending(true)
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbxUwLXtah8_u_cegjV8HhNWneCCyfoDx2ltgr2UePQACA1lHmW7l10fd08MlUESZUxGJA/exec',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response.data)
      setIsSent(true)
      e.target.reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSending(false)
    }
  }

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className='max-w-5xl pt-32 mx-auto p-4 shadow-md rounded-md'>
      <form
        onSubmit={handleSubmit}
        className='grid max-md:p-7 animate__animated animate__fadeInUp pt-14 bg-slate-900 rounded-xl pb-32 px-32'
      >
        <div className='flex flex-col justify-center items-center'>
          <img src={Poster} className='w-[300px]' alt='' />
        </div>
        <h2 className='text-4xl font-bold mb-7 text-center'>
          Registration Form
        </h2>
        <p className='mb-7 max-md:text-justify text-sm text-gray-400'>
          Welcome to <span className='font-semibold text-second'>Cipher</span>,
          the premier event organized by the Club of IT! Get ready to challenge
          your skills with our Aptitude and Reasoning Test, designed to push
          your problem-solving abilities to the limit. Following the test, you
          have the option to participate in a dynamic Group Discussion to
          further showcase your analytical and communication skills. Register
          now and join us for an intellectually stimulating experience!
        </p>
        <div className='lg:flex w-full gap-10 justify-between'>
          <div className='mb-7 w-full'>
            <label htmlFor='fullName' className='block font-medium '>
              Full Name <span className='text-red-600'>*</span>
            </label>
            <input
              type='text'
              id='fullName'
              name='Name'
              className='mt-1 p-2 block w-full border focus:border-first rounded-sm focus:outline-none bg-transparent shadow-sm'
              required
            />
          </div>
          <div className='mb-7 w-full'>
            <label htmlFor='email' className='block  font-medium '>
              Email Address <span className='text-red-600'>*</span>
            </label>
            <input
              type='email'
              id='email'
              name='Email'
              className='mt-1 p-2 block w-full border focus:border-first rounded-sm focus:outline-none bg-transparent shadow-sm'
              required
            />
          </div>
        </div>
        <div className='mb-7'>
          <label className='block  font-medium '>
            Year of Study <span className='text-red-600'>*</span>
          </label>
          <div className='mt-1 grid max-md:grid-cols-2 grid-cols-4'>
            {['1st year', '2nd year', '3rd year', '4th year'].map((year) => (
              <div key={year} className='flex items-center mb-2'>
                <input
                  required
                  type='radio'
                  id={year}
                  name='Year_Of_Study'
                  value={year}
                  className='mr-2'
                />
                <label htmlFor={year} className=' '>
                  {year}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='mb-7'>
          <label htmlFor='department' className='block  font-medium '>
            Department <span className='text-red-600'>*</span>
          </label>
          <input
            type='text'
            id='department'
            name='Department'
            className='mt-1 p-2 block w-full border focus:border-first rounded-sm focus:outline-none bg-transparent shadow-sm'
            required
          />
        </div>
        <div className='mb-7'>
          <label className='block  font-medium '>
            Would you like to participate in the Group Discussion?{' '}
            <span className='text-red-600'>*</span>
          </label>
          <div className='mt-1 flex gap-10'>
            {['Yes', 'No'].map((option) => (
              <div key={option} className='flex items-center mb-2'>
                <input
                  required
                  type='radio'
                  id={option}
                  name='Group_Discussion'
                  value={option}
                  className='mr-2'
                />
                <label htmlFor={option} className=' '>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='mb-7'>
          <label htmlFor='additionalComments' className='block  font-medium '>
            We welcome any additional opinions or questions!
          </label>
          <textarea
            id='additionalComments'
            name='Additional_Comments'
            className='mt-1 p-2 block w-full border focus:border-first rounded-sm focus:outline-none bg-transparent shadow-sm'
          />
        </div>
        {isSending ? (
          <p className='text-xl text-first'>Please wait...</p>
        ) : (
          <button
            type='submit'
            className='w-32 max-md:w-full bg-first text-white p-2 rounded-sm hover:bg-blue-900 transition duration-200'
          >
            Submit
          </button>
        )}
        {isSent && (
          <p className='mt-4 text-lg text-green-600'>
            Your registration was successful! We look forward to seeing you at
            the event on the 25th May.
          </p>
        )}
      </form>
    </div>
  )
}

export default RegistrationForm

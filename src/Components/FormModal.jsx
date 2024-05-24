import { useState } from 'react'
import Logo from '../assets/logo.svg'
import axios from 'axios'

const FormModal = ({ isOpen, onClose }) => {
  const [isSent, setIsSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      setIsSent(false)
      setIsSending(true)
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbzDOLIVS25GuQFaoT3fh50i_mZibVPBYT3b1hqc8tA1ntrUrGsk36BZ7DJ_AV5S2QbGNQ/exec',
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

  return (
    <>
      {isOpen && (
        <div className='fixed h-screen w-screen inset-0 z-40 flex items-center justify-center'>
          <div className='fixed h-[150vh] w-screen z-50 bg-black opacity-50'></div>
          <div className='relative z-50 animate__animated animate__zoomIn animate__faster bg-slate-800 text-white rounded-xl lg:w-[500px] w-[360px] p-6'>
            <button
              className='absolute top-0 right-0 m-2 p-2 text-gray-200 hover:text-first'
              onClick={onClose}
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
                <div className='flex justify-center'>
                  <img src={Logo} className='w-[150px]' alt='' />
                </div>
                {/* <p className='text-center text-2xl'>
                  Fill the form to join Cipher
                </p> */}
                {/* <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='Full_Name'
                    placeholder='Full Name'
                    className='p-2 border bg-transparent rounded-sm focus:outline-none w-full mb-3'
                    required
                  />
                  <input
                    type='text'
                    name='Institution'
                    placeholder='Institution'
                    className='p-2 border bg-transparent rounded-sm focus:outline-none w-full mb-3'
                    required
                  />
                  <input
                    type='text'
                    name='Roll_Number'
                    placeholder='Roll Number'
                    className='p-2 border bg-transparent rounded-sm focus:outline-none w-full mb-3'
                    required
                  />
                  <input
                    type='text'
                    name='Department'
                    placeholder='Department'
                    className='p-2 border bg-transparent rounded-sm focus:outline-none w-full mb-3'
                    required
                  />
                  <input
                    type='text'
                    name='Mobile_Number'
                    placeholder='Mobile Number'
                    className='p-2 border bg-transparent rounded-sm focus:outline-none w-full mb-3'
                    required
                  />
                  <input
                    type='email'
                    name='Email_Address'
                    placeholder='Email Address'
                    className='p-2 border bg-transparent rounded-sm focus:outline-none w-full mb-3'
                    required
                  />
                  {isSending ? (
                    <p className='text-xl text-first'>Please wait...</p>
                  ) : (
                    <button
                      type='submit'
                      className='px-4 font-semibold py-3 w-full hover:bg-blue-700 bg-first text-white rounded-sm transition duration-200'
                    >
                      SUBMIT
                    </button>
                  )}
                </form> */}
                <div>
                  <p className='text-lg py-5'>
                    Thank you for your interest in <strong>Cipher</strong>. Our
                    registration period has ended. We will begin accepting new
                    registrations again in <strong>August 2024</strong>.
                  </p>
                  <p className='text-lg py-5'>
                    We appreciate your visit and look forward to seeing you in
                    the future!
                  </p>
                </div>
                {isSent && (
                  <p className='mt-4 text-lg text-green-600'>
                    Your application has been submitted successfully! We will
                    review your details and get back to you soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormModal

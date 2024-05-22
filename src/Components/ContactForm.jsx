import { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      setIsSent(false)
      setIsSending(true)
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbwsHf3SCdtxGy5VPyP7fFQrfqxZI0VnIUgGUQAMNU1RJOi7Og3x_Buswa0ThB3rMwNKEQ/exec',
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
    <div>
      <form onSubmit={handleSubmit} className='bg-slate-950 p-10 rounded-2xl'>
        <div className='mb-7 w-full'>
          <p className='text-4xl py-2 font-extralight'>
            Hey, <span>Cipher</span>
          </p>
          <input
            type='email'
            id='email'
            placeholder='Write your email address'
            name='Email'
            className='mt-3 p-2 block w-full border-b-[1px] focus:border-first focus:outline-none bg-transparent shadow-sm'
            required
          />
          <textarea
            placeholder='Write your message...'
            id='additionalComments'
            name='Message'
            className='mt-7 p-2 block w-full border-b-[1px] focus:border-first focus:outline-none bg-transparent shadow-sm'
          />
          {isSending ? (
            <p className='text-xl py-5 text-first'>Please wait...</p>
          ) : (
            <button
              type='submit'
              className='px-8 mt-7 w-full rounded-full bg-first text-xl font-semibold py-3 hover:bg-blue-900 transition duration-200'
            >
              Leave a message
            </button>
          )}
          {isSent && (
            <p className='mt-4 text-lg text-green-600'>
              Your message has been sent successfully! We will get back to you
              soon.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactForm

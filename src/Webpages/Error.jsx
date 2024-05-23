import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-screen text-center h-[635px] max-md:h-[650px] flex justify-center items-center'>
      <div className='mt-20'>
        <p className='text-7xl md:text-[150px] font-extrabold bg-gradient-to-r from-first to-second text-transparent bg-clip-text'>
          404
        </p>
        <p className='py-3 text-lg pb-5'>Oops! You are on the wrong page. </p>
        <Link to={'/'}>
          <button className='px-8 hover:bg-blue-900 py-3 bg-first rounded-full text-lg font-semibold'>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Error

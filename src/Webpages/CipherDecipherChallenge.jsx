import Img from '../assets/poster.svg'
import first from '../assets/Program/first.png'
import second from '../assets/Program/second.png'
import third from '../assets/Program/third.png'
import Result from '../assets/result.svg'

const CipherDecipherChallenge = () => {
  return (
    <div className='min-h-screen w-screen  text-gray-300 flex flex-col items-center p-4'>
      {/* <Poster /> */}
      <ResultDeclaration />
    </div>
  )
}

const Poster = () => {
  return (
    <div className='max-w-3xl animate__animated animate__fadeInUp w-full border border-first shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-first text-center py-2'>
        <div className='flex justify-center'>
          <img
            src={Img}
            alt=''
            className='w-[180px] lg:w-[250px] md:w-[550px]'
          />
        </div>
      </div>
      <div className='p-6 md:p-10'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
          <div className='flex items-center mb-4 md:mb-0'>
            <span className='text-2xl mr-4'>🗓</span>
            <span className='text-lg'>Date: 25th May, Saturday</span>
          </div>
          <div className='flex items-center'>
            <span className='text-2xl mr-4'>⏰</span>
            <span className='text-lg'>Time: 11:00 AM onwards</span>
          </div>
        </div>
        <div className='flex items-center justify-center mb-6'>
          <span className='text-2xl mr-4'>📍</span>
          <span className='text-lg'>Venue: IT Seminar Hall, SoT</span>
        </div>
        <div className='text-center mb-6'>
          <p className='text-xl'>
            Join us for an exciting event, explore interesting topics in logical
            aptitude and show off your problem-solving skills to win prizes. The
            event will end with a Group Discussion round.
          </p>
          <p className='mt-4 text-lg font-semibold'>OPEN TO ALL</p>
        </div>
        <div className='text-center'>
          <a
            href='https://forms.gle/zMqPPz3JrpxhDEwK6'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300'
          >
            🔗 Register here
          </a>
        </div>
        <div className='text-center mt-6'>
          <p className='text-lg'>
            Don&apos;t miss this chance to participate, learn, and share your
            ideas. See you there!
          </p>
        </div>
      </div>
    </div>
  )
}

const ResultDeclaration = () => {
  return (
    <div className='max-w-3xl animate__animated animate__fadeInUp w-full border border-first shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-first text-center py-2'>
        <div className='flex justify-center'>
          <img
            loading='lazy'
            src={Result}
            alt=''
            className='w-[180px] lg:w-[250px] md:w-[550px]'
          />
        </div>
      </div>
      <div className='p-6 lg:p-16 md:p-10'>
        <img src={first} className='w-full' loading='lazy' alt='' />
        <div className='my-10 h-[1px] bg-first' />
        <img src={second} className='w-full' loading='lazy' alt='' />
        <div className='my-10 h-[1px] bg-first' />
        <img src={third} className='w-full' loading='lazy' alt='' />
      </div>
    </div>
  )
}

export default CipherDecipherChallenge

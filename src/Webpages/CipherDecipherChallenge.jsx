import Img from '../assets/poster.svg'
import sq1 from '../assets/Program/sq1.jpeg'

const CipherDecipherChallenge = () => {
  return (
    <div className='min-h-screen w-screen pt-28 text-gray-300 md:pt-32 lg:pt-28 flex flex-col items-center p-4 md:p-10'>
      <Poster />
      {/* <ResultDeclaration /> */}
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
    <div className='shadow-lg animate__animated animate__fadeInUp rounded-lg overflow-hidden mt-10 w-full max-w-5xl mx-auto'>
      <div className='text-center py-4'>
        <h2 className='text-4xl max-md:text-3xl font-bold text-green-500 '>
          Winner Announcement
        </h2>
      </div>
      <div className='p-3 grid max-md:grid-cols-1 grid-cols-2 gap-5 w-full md:p-10'>
        <img
          loading='lazy'
          src={sq1}
          alt={`picture`}
          className='mx-auto border rounded-lg mb-4'
        />
        <img
          src={sq1}
          alt={`picture`}
          className='mx-auto border rounded-lg mb-4'
        />
        <img
          src={sq1}
          alt={`picture`}
          className='mx-auto border rounded-lg mb-4'
        />
      </div>
    </div>
  )
}

export default CipherDecipherChallenge

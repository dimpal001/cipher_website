import Card from '../Components/Card'
import Img1 from '../assets/bg1.svg'
import Img2 from '../assets/bg2.svg'
import Logo from '../assets/logo.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  document.title = 'Cipher | NEHU'
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className='container mx-auto'>
      {/* hero section */}
      <section className='w-full lg:-mt-24 max-lg:flex-col min-h-screen max-md:px-3 max-lg:text-center max-md:text-4xl text-7xl font-extrabold flex justify-around items-center'>
        <div className='max-lg:pt-32 lg:pt-24'>
          <div className='relative z-20'>
            <p className='font-extralight animate__rubberBand animate__animated'>
              Explore IT Excellence
            </p>
            <p className='pt-2 font-extralight animate__rubberBand animate__animated'>
              with{' '}
              <span className='text-second'>
                <img
                  src={Logo}
                  className='lg:w-[130px] w-[100px] inline-block'
                  alt=''
                />
              </span>{' '}
              Club
            </p>
            <p className='text-lg max-md:text-sm pt-5 font-light'>
              Discover the world of IT with Cipher, the premier club for tech
              enthusiasts. <br className='max-md:hidden' /> Stay updated with
              our latest events and news.
            </p>
            <Link to={'/cipher-decipher'}>
              {/* <button className='p-3 lg:py-4 px-6 max-md:mt-14 bg-gradient-to-r from-first to-blue-950 text-lg font-semibold rounded-full'>
                CIPHER-DECIPHER Challenge
              </button> */}
              <div className='buttons max-md:mt-5'>
                <Link to={'/treasure-hunt'}>
                  <button className='btn-hover hover:scale-[1.05] color-7'>
                    Treasure Hunt 2.0
                  </button>
                </Link>
              </div>
              {/* <button
                type='button'
                className='text-white max-md:mt-5 transition-all duration-500 rounded-full bg-gradient-to-r p-3 lg:py-4 px-6 from-purple-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold text-lg text-center me-2 mb-2'
              >
                CIPHER-DECIPHER Result
              </button> */}
            </Link>
          </div>
          <img
            src={Img1}
            className='absolute opacity-20 max-md:opacity-70 inset-0 z-10 max-md:top-[130px] top-[110px]'
            alt=''
          />
          <div className='absolute top-[100px] left-[200px] bg-gray-300 w-[90px] h-[90px] blur-[200px] rounded-full filter' />
          <div className='absolute bottom-[100px] right-[200px] bg-white w-[50px] h-[50px] blur-[100px] rounded-full filter' />
          <div className='absolute bottom-[100px] bg-gray-400 w-[90px] h-[90px] blur-[200px] rounded-full filter' />
        </div>
        <div className='pt-28 relative max-md:pb-28 z-40'>
          <Swipper />
        </div>
      </section>

      {/* About Section  */}
      <div id='about' className='mb-16 max-md:mb-24' />
      <section className='w-full min-h-screen pb-5 max-md:px-3 flex flex-col justify-center'>
        <p className='text-5xl max-md:text-4xl text-center pb-5 font-bold bg-gradient-to-r from-first to-second text-transparent bg-clip-text'>
          Discover Cipher&apos;s Essence
        </p>
        <p className='py-5 pb-10 text-center lg:px-[170px]'>
          Cipher is a dynamic community for B.Tech students in North-Eastern
          Hill University, Shillong passionate about technology and innovation.
          Our mission is to foster a collaborative environment where members can
          enhance their technical skills, share knowledge, and work on exciting
          projects.
        </p>
        <div className='gap-10 max-md:p-2 flex justify-between max-md:flex-col items-center'>
          {aboutCipherArray.map((item, index) => (
            <div data-aos='fade-up' key={index}>
              <Card img={item.img} title={item.title} desc={item.desc} />
            </div>
          ))}
        </div>
      </section>

      {/* Event Section  */}
      <span id='events' />
      <section
        data-aos='fade-up'
        className='w-full relative min-h-screen max-md:mt-24 pb-5 max-md:px-3 flex flex-col justify-center'
      >
        <div className='relative z-20'>
          <p className='text-5xl max-md:text-4xl text-center pb-5 font-bold bg-gradient-to-r from-first to-second text-transparent bg-clip-text'>
            Cipher&apos;s Exciting Events
          </p>
          <p className='py-5 pb-10 text-center lg:px-[170px]'>
            Explore a world of fun and learning with Cipher&apos;s diverse range
            of competitions and activities, designed to spark your curiosity and
            ignite your passion for technology.
          </p>
        </div>
        <img
          src={Img2}
          className='absolute left-[500px] max-md:left-7 z-10 opacity-20 max-md:top-12 top-[130px] w-[350px]'
          alt=''
        />
        <div className='gap-10 mt-14 grid lg:grid-cols-4 max-lg:grid-cols-2'>
          {competitionsArray.map((item, index) => (
            <div data-aos='fade-up' key={index}>
              <CompetitionCard img={item.img} title={item.title} />
            </div>
          ))}
          <div id='gallery' />
        </div>
      </section>

      {/* Gallery Section  */}
      <section data-aos='fade-up' className='pb-20'>
        <p className='text-5xl max-md:text-4xl text-center pb-14 font-bold bg-gradient-to-r from-first to-second text-transparent bg-clip-text'>
          Our Activities <br className='lg:hidden' /> Gallery
        </p>
        <Swipper2 />
      </section>

      {/* Get in touch  */}
      <span id='contact' />
      <section
        data-aos='fade-up'
        className='w-full relative min-h-screen max-md:px-3 flex flex-col justify-center'
      >
        <div
          style={{ backgroundColor: 'rgba(103, 97, 237, 0.1)' }}
          className='relative z-20 rounded-3xl max-md:p-7 p-12'
        >
          <div className='flex max-md:flex-col gap-10'>
            <div className='lg:w-1/2 flex max-md:gap-1 gap-4 flex-col text-gray-300 mt-10'>
              <p className='text-5xl max-md:text-center max-md:text-4xl pb-5 font-extrabold text-gray-300'>
                Get in touch
              </p>
              <div>
                <p className='text-lg font-semibold'>Call</p>
                <p>+917250148414</p>
              </div>
              <div>
                <p className='text-lg font-semibold'>Email</p>
                <p>theciphernehu@gmail.com</p>
              </div>
              <div>
                <p className='text-lg font-semibold'>Location</p>
                <p>SOT, NEHU, Shillong</p>
              </div>
            </div>
            <div data-aos='fade-up' className='lg:w-1/2'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const CompetitionCard = ({ title, img }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={img} alt='' />
      <p>{title}</p>
    </div>
  )
}

import CardImg1 from '../assets/1.svg'
import CardImg2 from '../assets/2.svg'
import CardImg3 from '../assets/3.svg'
import CImg1 from '../assets/c1.svg'
import CImg2 from '../assets/c2.svg'
import CImg3 from '../assets/c3.svg'
import CImg4 from '../assets/c4.svg'
import ContactForm from '../Components/ContactForm'
import { Link } from 'react-router-dom'
import Swipper from '../Components/Swipper'
import Swipper2 from '../Components/Swipper2'
import { useEffect } from 'react'

const competitionsArray = [
  {
    title: 'Group Discussions',
    img: CImg4,
  },
  {
    title: 'Coding Competitions',
    img: CImg1,
  },
  {
    title: 'Treasure Hunt',
    img: CImg3,
  },
  {
    title: 'Quiz Competitions',
    img: CImg2,
  },
]

const aboutCipherArray = [
  {
    img: CardImg1,
    title: 'Empowering Tech Enthusiasts',
    desc: 'We organize coding competitions, quizzes, and treasure hunts to challenge and sharpen your problem-solving skills. Join us to compete, learn, and grow in a supportive environment.',
  },
  {
    img: CardImg2,
    title: 'Facilitating Knowledge Sharing',
    desc: 'Our study sessions and workshops are designed to cover a wide range of IT topics. From beginner to advanced levels, these sessions provide valuable insights and practical knowledge.',
  },
  {
    img: CardImg3,
    title: 'Fostering Community and Collaboration',
    desc: "Cipher is more than just a club; it's a community. We encourage group discussions, teamwork, and networking opportunities to help you build lasting connections and collaborate on innovative projects.",
  },
]

export default Home

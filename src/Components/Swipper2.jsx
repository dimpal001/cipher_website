import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles2.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import p1 from '../assets/Program/1.png'
import p2 from '../assets/Program/2.png'
import p3 from '../assets/Program/3.png'
import p4 from '../assets/Program/4.png'
import p5 from '../assets/Program/5.png'
import p6 from '../assets/Program/6.png'
import p7 from '../assets/Program/7.png'
import p8 from '../assets/Program/8.png'

export default function Swipper2() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper opacity-80 max-md:w-[366px] md:w-[750px] max-md:h-full lg:w-[1000px]'
      >
        <SwiperSlide>
          <img src={p1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p6} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p7} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p8} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

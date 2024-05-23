import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import './styles.css'
import { Autoplay, EffectCards } from 'swiper/modules'

import sq1 from '../assets/Program/sq1.jpeg'
import sq2 from '../assets/Program/sq2.jpeg'
import sq3 from '../assets/Program/sq3.jpeg'
import sq4 from '../assets/Program/sq4.jpeg'

const Swipper = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={sq1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sq2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sq3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sq4} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swipper

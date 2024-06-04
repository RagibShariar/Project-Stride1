import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../assets/images/banner/1.jpeg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpeg'
import img4 from '../../assets/images/banner/4.png'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'
import img7 from '../../assets/images/banner/7.jpg'



const Hero = () => {
  
  return (
    <div className='z-0 relative w-full '>
      <Swiper
      // spaceBetween={30}
        centeredSlides={true}
        loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        pagination={{
          type: 'progressbar',
        // clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
        <SwiperSlide><img className='w-full' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full'src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full'src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full'src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full'src={img7} alt="" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Hero;

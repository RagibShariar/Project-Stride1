import Marquee from "react-fast-marquee";
import img1 from '../../assets/images/brands/1.png'
import img2 from '../../assets/images/brands/2.jpg'
import img3 from '../../assets/images/brands/3.jpg'
import img4 from '../../assets/images/brands/4.png'
import img5 from '../../assets/images/brands/5.png'
import img6 from '../../assets/images/brands/6.webp'
import img7 from '../../assets/images/brands/7.png'
import img8 from '../../assets/images/brands/8.png'
import img9 from '../../assets/images/brands/9.png'

import f1 from '../../assets/images/furnitures/f1.jpg'
import f2 from '../../assets/images/furnitures/f2.jpg'
import f3 from '../../assets/images/furnitures/f3.png'
import f4 from '../../assets/images/furnitures/f4.png'
import f5 from '../../assets/images/furnitures/f5.png'
import f6 from '../../assets/images/furnitures/f6.jpg'
import f7 from '../../assets/images/furnitures/f7.jpg'
import f8 from '../../assets/images/furnitures/f8.jpg'


const BrandSlider = () => {
  return (
    <div className="mt-12 max-w-7xl mb-24 mx-auto relative z-0">
      <Marquee gradient speed={30}>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img1} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img2} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img3} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img4} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img5} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img6} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img7} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img8} alt={img1} /></div>
        <div className=" flex items-center justify-center mx-4 w-64"> <img src={img9} alt={img1} /></div>

      </Marquee>
      
      <Marquee gradient direction="right" speed={30}>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f1} alt={f1} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f2} alt={f2} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f3} alt={f3} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f4} alt={f4} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f5} alt={f5} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f6} alt={f6} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f7} alt={f7} /></div>
      <div className=" flex items-center justify-center mx-4 w-64"> <img src={f8} alt={f8} /></div>
      </Marquee>
    </div>
  );
};

export default BrandSlider;
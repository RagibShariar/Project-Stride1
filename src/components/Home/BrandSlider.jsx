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

const BrandSlider = () => {
  return (
    <div className="mt-12 max-w-7xl mb-24 mx-auto relative z-0">
      <Marquee gradient >
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
    </div>
  );
};

export default BrandSlider;
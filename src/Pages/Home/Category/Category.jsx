import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTtle from '../../../components/SectionTitle/SectionTtle';


const Category = () => {
    return (
        <>
      <section className='container'>

      <SectionTtle
      subHeading={'from 11am to 10pm'}
      heading={"Order online"}
      >
    
      </SectionTtle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16 max-w-[80%] mx-auto"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-4xl  text-center -mt-24 text-white uppercase'>salad</h1>

            </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
            <h1 className='text-4xl  text-center -mt-24 text-white uppercase'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
            <h1 className='text-4xl  text-center -mt-24 text-white uppercase'>soup</h1>
            </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
            <h1 className='text-4xl  text-center -mt-24 text-white uppercase'>dessert</h1>
            </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
            <h1 className='text-4xl  text-center -mt-24 text-white uppercase'>salad</h1>
            </SwiperSlide>
      
      </Swiper>
      </section>
        </>
    );
};

export default Category;
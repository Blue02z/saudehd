import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function SectionFive() {
  const swiperRef = useRef(null); 

  return (
    <div className='flex flex-col items-center justify-center mt-10    gap-4'>

      
      <h1 className='text-[#38383D] text-[40px] font-[600]'>Nossos <span className='text-[#1577E0] font-[700]'>parceiros</span></h1>
      <h3 className='text-[#38383D] text-[15px] font-[600] mb-8'>Conheça algum dos nossos melhores <span className='text-[#1577E0] font-[700]'>parceiros</span></h3>

      <div className='flex items-center w-[1000px]'>

      <div className='swiper-nav-button mr-5 mt-16'>
          <button onClick={() => swiperRef.current.slidePrev()}><GrFormPrevious className='w-[25px] h-[25px]'/></button> 
        </div>

        <Swiper
          onSwiper={(swiper) => swiperRef.current = swiper}
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='w-[200px] h-[200px]'>
              <img className='w-[200px] h-[200px]' src="https://saudehd.com.br/wp-content/uploads/2023/08/Design-sem-nome-88-1-300x300.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[200px] h-[200px]'>
              <img className='w-[200px] h-[200px]' src="https://saudehd.com.br/wp-content/uploads/2023/08/2-2-300x300.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[200px] h-[200px]'>
              <img className='w-[200px] h-[200px]' src="https://saudehd.com.br/wp-content/uploads/2023/08/1-2-300x300.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[200px] h-[200px]'>
              <img className='w-[200px] h-[200px]' src="https://saudehd.com.br/wp-content/uploads/2023/08/Design-sem-nome-89-2-300x300.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

      
       
        
        <div className='swiper-nav-button mt-16'>
          <button onClick={() => swiperRef.current.slideNext()}><GrFormNext  className='w-[25px] h-[25px]' /></button>
        </div>

      </div>
    </div>
  )
}

export default SectionFive;

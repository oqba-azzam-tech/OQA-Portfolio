// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';

 const Swiperr = ({Review = []}) => {

   

  return <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay ]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      style={{ width: '700px', height: '400px', borderLeft:'solid 4px var(--color-accent)',borderBottom:'solid 1px var(--color-accent)',borderRadius:'40px' }}
    >
      
      {Review.map(( elemnt,index)=> <SwiperSlide key={index}>
        <div className='bg-secondary h-full w-full flex justify-center items-center rounded-[40px]'>

              <div className='flex flex-col gap-3.5 justify-center items-center'>

                <p className='max-w-[600px] text-center italic text-2xl font-bold '>
                  {elemnt.review}
                </p>
                <h3 className='text-text-secondary font-extrabold'>" {elemnt.name} "</h3>
              </div>
        </div>
      </SwiperSlide> )}
    </Swiper>
};

export default Swiperr
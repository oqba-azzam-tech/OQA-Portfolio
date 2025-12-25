import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {  FaUser } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper = ({name ,rev}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-back-ground-1 p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">
                <FaUser/>
              </div>
              <div>
                <div className="text-gray-900 font-medium">{name}</div>
              </div>
            </div>
            <div className="flex text-secondery text-xl">★★★★★</div>
            <p className="text-gray-700">
              {rev}
            </p>
          </div>
          </SwiperSlide>

     
    </Swiper>
  );
};

export default swiper
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/effect-fade';

// const Swiperr = ({ Review = [] }) => {
//   if (!Review || Review.length === 0) {
//     return (
//       <div className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center bg-secondary rounded-[40px]">
//         <p className="text-text-secondary">No reviews available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[800px] xl:max-w-[900px] mx-auto">
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation
//         pagination={{ 
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         scrollbar={{ draggable: true }}
//         loop={true}
//         autoplay={{ 
//           delay: 4000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={800}
//         grabCursor={true}
//         className="w-full h-auto min-h-[280px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[450px] rounded-[40px] [&_.swiper-button-next]:!text-accent [&_.swiper-button-prev]:!text-accent [&_.swiper-button-next]:!w-8 [&_.swiper-button-prev]:!w-8 [&_.swiper-button-next]:!h-8 [&_.swiper-button-prev]:!h-8 sm:[&_.swiper-button-next]:!w-10 sm:[&_.swiper-button-prev]:!w-10 sm:[&_.swiper-button-next]:!h-10 sm:[&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!bg-black/50 [&_.swiper-button-prev]:!bg-black/50 [&_.swiper-button-next]:!rounded-full [&_.swiper-button-prev]:!rounded-full [&_.swiper-button-next]:!backdrop-blur-sm [&_.swiper-button-prev]:!backdrop-blur-sm hover:[&_.swiper-button-next]:!bg-accent hover:[&_.swiper-button-prev]:!bg-accent hover:[&_.swiper-button-next]:!text-white hover:[&_.swiper-button-prev]:!text-white [&_.swiper-button-next]:!transition-all [&_.swiper-button-prev]:!transition-all [&_.swiper-button-next]:!duration-300 [&_.swiper-button-prev]:!duration-300 [&_.swiper-button-next]:!scale-100 [&_.swiper-button-prev]:!scale-100 hover:[&_.swiper-button-next]:!scale-110 hover:[&_.swiper-button-prev]:!scale-110 [&_.swiper-button-next::after]:!text-sm sm:[&_.swiper-button-next::after]:!text-base [&_.swiper-button-prev::after]:!text-sm sm:[&_.swiper-button-prev::after]:!text-base [&_.swiper-pagination-bullet]:!bg-text-secondary [&_.swiper-pagination-bullet-active]:!bg-accent [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!h-2 sm:[&_.swiper-pagination-bullet]:!w-2.5 sm:[&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!opacity-50 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!rounded-md [&_.swiper-scrollbar]:!h-1 [&_.swiper-scrollbar-drag]:!bg-accent [&_.swiper-slide]:!opacity-0 [&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide]:!transition-opacity [&_.swiper-slide]:!duration-700"
//       >
//         {Review.map((elemnt, index) => (
//           <SwiperSlide key={index}>
//             <div className='bg-gradient-to-br from-secondary to-secondary/90 w-full h-full flex justify-center items-center rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl transition-all duration-300 hover:scale-[1.02]'>
//               <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center w-full'>
                
//                 {/* Quote Icon */}
//                 <div className="text-accent/50 text-3xl sm:text-4xl md:text-5xl">
//                   <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                   </svg>
//                 </div>
                
//                 {/* Review Text */}
//                 <p className='w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[90%] xl:max-w-[700px] text-center italic text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed sm:leading-relaxed md:leading-loose text-text-primary'>
//                   "{elemnt.review}"
//                 </p>
                
//                 {/* Divider */}
//                 <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-accent/50 rounded-full my-2"></div>
                
//                 {/* Name */}
//                 <h3 className='text-text-secondary font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center px-4'>
//                   — {elemnt.name}
//                 </h3>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Swiperr;


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Swiperr = ({ Review = [] }) => {
  if (!Review || Review.length === 0) {
    return (
      <div className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center bg-secondary rounded-[40px]">
        <p className="text-text-secondary">No reviews available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[800px] xl:max-w-[900px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={false}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ 
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        grabCursor={true}
        className="w-full h-auto min-h-[280px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[450px] rounded-[40px] [&_.swiper-button-next]:!text-accent [&_.swiper-button-prev]:!text-accent [&_.swiper-button-next]:!w-8 [&_.swiper-button-prev]:!w-8 [&_.swiper-button-next]:!h-8 [&_.swiper-button-prev]:!h-8 sm:[&_.swiper-button-next]:!w-10 sm:[&_.swiper-button-prev]:!w-10 sm:[&_.swiper-button-next]:!h-10 sm:[&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!bg-black/50 [&_.swiper-button-prev]:!bg-black/50 [&_.swiper-button-next]:!rounded-full [&_.swiper-button-prev]:!rounded-full [&_.swiper-button-next]:!backdrop-blur-sm [&_.swiper-button-prev]:!backdrop-blur-sm hover:[&_.swiper-button-next]:!bg-accent hover:[&_.swiper-button-prev]:!bg-accent hover:[&_.swiper-button-next]:!text-white hover:[&_.swiper-button-prev]:!text-white [&_.swiper-button-next]:!transition-all [&_.swiper-button-prev]:!transition-all [&_.swiper-button-next]:!duration-300 [&_.swiper-button-prev]:!duration-300 [&_.swiper-button-next]:!scale-100 [&_.swiper-button-prev]:!scale-100 hover:[&_.swiper-button-next]:!scale-110 hover:[&_.swiper-button-prev]:!scale-110 [&_.swiper-button-next::after]:!text-sm sm:[&_.swiper-button-next::after]:!text-base [&_.swiper-button-prev::after]:!text-sm sm:[&_.swiper-button-prev::after]:!text-base [&_.swiper-scrollbar]:!h-1 [&_.swiper-scrollbar-drag]:!bg-accent [&_.swiper-slide]:!opacity-0 [&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide]:!transition-opacity [&_.swiper-slide]:!duration-700"
      >
        {Review.map((elemnt, index) => (
          <SwiperSlide key={index}>
            <div className='bg-gradient-to-br from-secondary to-secondary/90 w-full h-full flex justify-center items-center rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl transition-all duration-300 hover:scale-[1.02]'>
              <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center w-full'>
                
                {/* Quote Icon */}
                <div className="text-accent/50 text-3xl sm:text-4xl md:text-5xl">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Review Text */}
                <p className='w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[90%] xl:max-w-[700px] text-center italic text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed sm:leading-relaxed md:leading-loose text-text-primary'>
                  "{elemnt.review}"
                </p>
                
                {/* Divider */}
                <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-accent/50 rounded-full my-2"></div>
                
                {/* Name */}
                <h3 className='text-text-secondary font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center px-4'>
                  — {elemnt.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiperr;
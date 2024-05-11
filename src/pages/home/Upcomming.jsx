import { A11y, Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Upcomming = () => {
  return (
    <>
   
      <Swiper
        loop={true}
        modules={[Scrollbar, A11y, Autoplay]}
        autoplay={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
      >
        <SwiperSlide>
        <div className="border duration-500 hover:border-bgColor hover:box-shadow p-6 rounded-md cursor-pointer space-y-4 text-center">
        <h1 className="font-Inter font-bold text-[30px] text-balance">
          Ticketing system integration
        </h1>
        <p className=" text-balance">
          Bolster your access approval workflows for privileged accounts by
          incorporating ticket ID validation. Authorize credential retrieval for
          service requests requiring privileged access only upon ticket status
          verification.
        </p>
        <button className="button">More Details</button>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border duration-500 hover:border-bgColor hover:box-shadow p-6 rounded-md cursor-pointer space-y-4 text-center">
        <h1 className="font-Inter font-bold text-[30px] text-balance">
          Ticketing system integration
        </h1>
        <p className=" text-balance">
          Bolster your access approval workflows for privileged accounts by
          incorporating ticket ID validation. Authorize credential retrieval for
          service requests requiring privileged access only upon ticket status
          verification.
        </p>
        <button className="button">More Details</button>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border duration-500 hover:border-bgColor hover:box-shadow p-6 rounded-md cursor-pointer space-y-4 text-center">
        <h1 className="font-Inter font-bold text-[30px] text-balance">
          Ticketing system integration
        </h1>
        <p className=" text-balance">
          Bolster your access approval workflows for privileged accounts by
          incorporating ticket ID validation. Authorize credential retrieval for
          service requests requiring privileged access only upon ticket status
          verification.
        </p>
        <button className="button">More Details</button>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border duration-500 hover:border-bgColor hover:box-shadow p-6 rounded-md cursor-pointer space-y-4 text-center">
        <h1 className="font-Inter font-bold text-[30px] text-balance">
          Ticketing system integration
        </h1>
        <p className=" text-balance">
          Bolster your access approval workflows for privileged accounts by
          incorporating ticket ID validation. Authorize credential retrieval for
          service requests requiring privileged access only upon ticket status
          verification.
        </p>
        <button className="button">More Details</button>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Upcomming;

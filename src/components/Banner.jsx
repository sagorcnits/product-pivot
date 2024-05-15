import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={false}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <div className="rounded-md overflow-hidden  md:h-[550px] h-[300px] bg-[url('https://img.freepik.com/free-vector/juice-glass-bottles-set_1284-18965.jpg?t=st=1715674373~exp=1715677973~hmac=6331f54bc0f5533776d611f4150b01f6998c9d482d467de944c6e37a2133286c&w=740')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1]">
          <div className="md:w-1/2 h-full text-center  text-white flex justify-center items-center gap-4">
            <div>
              <h1 className="text-[40px] font-Inter font-bold">juice Glass</h1>
              <p className="font-Inter py-3">
                Go product juice to keep the water
              </p>
              <p className="font-Inter">
                If you have a good product, please recommend it.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden  md:h-[550px] h-[300px] bg-[url('https://img.freepik.com/free-photo/back-position-smartphone-device-tech-generative-ai_188544-12116.jpg?t=st=1715675021~exp=1715678621~hmac=ada9017f0174ca1c74a2787019d279831ab66952cd21c0881a63ace55aaa56b5&w=740')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1] ">
          <div className="md:w-1/2 h-full text-center  text-white flex justify-center items-center gap-4">
            <div className=" *:font-Inter">
              <h1 className="text-[40px]  font-bold">oppo 34</h1>
              <p className="py-3">This is a very good oppo phone</p>
              <p className="text-balance">
                Good Quality Oppo Phone but if You have a better phone than
                recommended my post
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden  md:h-[550px] h-[300px] bg-[url('https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?t=st=1715675323~exp=1715678923~hmac=73956a25a5080f4b38b8e85003f3aab57ca5102e34cf1e428a3dbd69dc867465&w=740')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1] ">
          <div className="md:w-1/2 h-full text-center  text-white flex justify-center items-center gap-4">
            <div className=" *:font-Inter">
              <h1 className="text-[40px] font-bold">Lenevo Laptop</h1>
              <p className="py-3">
                This Product Bad Quality becouse Its Speacker Sound quality
                problem
              </p>
              <p>
                If You have a bettar than recommend me please post follow this
                product
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

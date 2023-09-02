import React from "react";
import { FiStar } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "./style.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const BaseItem = ({ data }: any) => {
  console.log("data", data);

  return (
    <div className="w-[320px] h-[300px]">
      <div className="w-full h-full rounded-xl overflow-hidden relative">
        <Swiper
          loop={true}
          // autoplay={{
          // 	delay: 10000,
          // 	disableOnInteraction: false,
          // }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper cursor-pointer"
        >
          {data.images?.map((image: any) => {
            return (
              <SwiperSlide key={image.id}>
                <img
                  width="100%"
                  className="w-full h-full object-cover object-center"
                  src={image.url}
                  alt="img"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute z-10 top-3 right-3 cursor-pointer">
          <AiOutlineHeart size="24px" color="white" />
          {/* <AiFillHeart size='24px' color='white' /> */}
        </div>
      </div>
      <div className="grid mt-2 grid-cols-5 justify-between font-bold gap-4">
        <span className="col-span-4 text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer">
          {data.address}
        </span>
        <span className="col-span-1 cursor-pointer">
          <FiStar className="inline pb-[2px]" size="20px" /> {data.stars}{" "}
        </span>
      </div>
      <div className="mt-[2px]">
        <span className="text-gray-600 cursor-pointer">{`Cách ${data.distance} km`}</span>
      </div>
      <div className="mt-[2px]">
        <span className="text-gray-600 cursor-pointer">{`${data.startDate} - ${data.endDate}`}</span>
      </div>
      <div className="underline mt-[2px] cursor-pointer">
        <span className="font-bold">{`${data.price}$`}</span>
        <span> tổng trước thuế</span>
      </div>
    </div>
  );
};

export default BaseItem;

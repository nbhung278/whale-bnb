import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { TbBeach } from "react-icons/tb";
import Tsunami from "../../assets/images/icon-tsunami.png";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function NavBaseSlider({ classes, items }: any) {
	return (
		<div className={classes}>
			<Swiper
				// slidesPerView={12}
				// spaceBetween={30}
				navigation={false}
				breakpoints={{
					// when window width is >= 640px
					200: {
						slidesPerView: 2,
					},
					600: {
						slidesPerView: 3,
					},
					700: {
						slidesPerView: 4,
					},
					// when window width is >= 768px
					800: {
						slidesPerView: 6,
					},
					1000: {
						slidesPerView: 8,
					},
					1300: {
						slidesPerView: 10,
					},
				}}
				modules={[Navigation]}
				className="mySwiper"
			>
				{items.map((item: any) => {
					return (
						<SwiperSlide>
							<div className="flex flex-col justify-center items-center gap-2 text-gray-500 hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
								<img
									style={{ maxWidth: "30px", maxHeight: "40px" }}
									src={item.image}
									alt="tsunami"
								/>
								<span className="text-[12px] font-semibold">{item.text}</span>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

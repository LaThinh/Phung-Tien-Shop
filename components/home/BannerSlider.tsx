"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Loading from "../Loading";

import { getBanners } from "@/libs/graph/graphBanner";
import { Banner } from "@/graphql/graphql";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSlider() {
	const [banners, setBanners] = useState<Banner[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchBanners = async () => {
		const resBanners = await getBanners();

		if (resBanners && resBanners.length > 0) {
			setBanners(resBanners);
			console.log(resBanners);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchBanners();
	}, []);
	// console.log(banners);

	return (
		<div className="home-banner w-full">
			{loading ? (
				<Loading
					className="min-h-96 aspect-[1920/800] bg-gray-100"
					loadingText="Loading Banner"
				/>
			) : (
				<div className="banner-slider w-full">
					<Swiper
						loop
						autoplay={{
							delay: 5000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						modules={[Autoplay, Pagination, Navigation]}
						navigation={true}
						pagination={true}
						slidesPerView={1}
						spaceBetween={0}
						//onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						{banners &&
							banners.map((banner) => (
								<SwiperSlide key={banner.id} className="w-full aspect-[1920/800]">
									<Image
										alt={banner.title}
										className="object-cover aspect-[1920/720] overflow-hidden"
										height={800}
										src={banner.image.url}
										width={1920}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			)}
		</div>
	);
}

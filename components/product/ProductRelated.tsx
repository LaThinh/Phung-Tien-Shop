"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import ProductCard from "./ProductCard";

import Loading from "@/components/Loading";
import { Product } from "@/graphql/graphql";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProductRelated({ products }: { products: Product[] }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div className="product-related my-6">
			<h3 className="font-bold text-lg lg:text-xl py-3 lg:py-5">Có thể bạn cũng thích</h3>
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
						breakpoints={{
							// when window width is >= 768px
							640: {
								slidesPerView: 3,
								spaceBetween: 16,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 18,
							},
							1200: {
								slidesPerView: 5,
								spaceBetween: 18,
							},
						}}
						modules={[Autoplay, Pagination, Navigation]}
						navigation={true}
						pagination={true}
						spaceBetween={10}
						// autoplay={{
						//   delay: 5000,
						//   disableOnInteraction: false,
						// }}

						slidesPerView={2}
					>
						{products &&
							products.length > 0 &&
							products.map((product) => (
								<SwiperSlide key={product.id}>
									<ProductCard product={product} />
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			)}
		</div>
	);
}

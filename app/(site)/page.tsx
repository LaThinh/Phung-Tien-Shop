import React from "react";

import BannerSlider from "@/components/home/BannerSlider";
import { getCategories } from "@/libs/graph/graphCategory";
import HomeCategories from "@/components/home/HomeCategories";

export default async function HomePage() {
	const categories = await getCategories();

	// console.log(categories);

	return (
		<div className="home-page">
			<div className="">
				<BannerSlider />
				{categories && <HomeCategories categories={categories} />}
			</div>
		</div>
	);
}

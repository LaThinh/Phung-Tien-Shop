import React from "react";
import { Image } from "@nextui-org/image";

import { getCategoryInfo, getProductsCategorySlug } from "@/libs/graph/graphCategory";
import ProductGrid from "@/components/product/ProductGrid";
import CategoryMenu from "@/components/product/CategoryMenu";
import { title } from "@/components/primitives";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const categoryInfo = await getCategoryInfo(slug);
	const products = await getProductsCategorySlug(slug, 48);

	return (
		<div className="category-page pb-10">
			<div className="container w-full m-auto max-w-screen-xl flex flex-col gap-5">
				<div className="category-banner">
					<Image alt={categoryInfo?.name} src={categoryInfo?.categoryBanner.url} />
				</div>
				<div className="category-content w-full p-3 lg:p-5 flex flex-col gap-8 lg:flex-row">
					<div className="sidebar hidden lg:flex top-0 sticky w-64">
						<CategoryMenu />
					</div>
					<div className="column-main flex-1 flex flex-col gap-6">
						<h1 className={title({ color: "green" })}>{categoryInfo?.name}</h1>
						<div className="category-description">
							<p>{categoryInfo?.description}</p>
						</div>
						{products && products.length > 0 && <ProductGrid products={products} />}
					</div>
				</div>
			</div>
		</div>
	);
}

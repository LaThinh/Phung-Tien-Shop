import React from "react";

import { getProductBySlug } from "@/libs/graph/graphCategory";
import { title } from "@/components/primitives";
import GalleryImage from "@/components/product/GalleryImage";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
	const slug = params.slug;

	const product = await getProductBySlug(slug);

	if (!product) {
		return;
	}

	return (
		<div className="product-page ">
			<div className="container p-3 lg:p-5 m-auto max-w-screen-xl">
				<div className="product-top py-10 flex flex-col gap-5 lg:flex-row lg:gap-10">
					<div className="product-images w-1/2">
						<GalleryImage product={product} />
					</div>
					<div className="product-info flex-1 flex flex-col gap-3">
						<h1
							className={` ${title({ color: "blue" })} product-name mt-5 text-xl 
              lg:!text-3xl !leading-loose font-bold text-primary-500 capitalize`}
						>
							{product?.name?.toLowerCase()}
						</h1>
						<div className="product-description">
							<p>{product?.description}</p>
						</div>
						<div className="product-price font-bold text-xl flex gap-1">
							<strong>Giá :</strong>
							<div className="price text-primary-500 flex gap-1">
								{product.price}
								<span>vnđ</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

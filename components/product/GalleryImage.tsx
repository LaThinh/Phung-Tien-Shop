"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/image";

import { Asset, Product } from "@/graphql/graphql";

export default function GalleryImage({ product }: { product: Product }) {
	const [mainImage, setMainImage] = useState<Asset>(product.imageGallery[0]);

	const handleChangeImage = (index: number) => {
		setMainImage(product.imageGallery[index]);
	};

	return (
		<div className="product-gallery flex flex-col gap-4">
			<div className="main-image w-full m-auto max-w-screen-sm aspect-square rounded-lg overflow-hidden bg-gray-200">
				<Image
					removeWrapper
					alt={mainImage.fileName || product.name || "Product Images"}
					className="w-full  aspect-square"
					radius="sm"
					src={mainImage.url}
				/>
			</div>

			{product.imageGallery && product.imageGallery.length > 1 && (
				<div className="gallery-thumbs flex gap-4">
					{product.imageGallery.map((image, index) => (
						<div key={image.id} className="gallery-item">
							<Image
								alt={image.fileName}
								className="w-32 aspect-square cursor-pointer"
								height={128}
								src={image.url}
								width={128}
								onClick={() => handleChangeImage(index)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

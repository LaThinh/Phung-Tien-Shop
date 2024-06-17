import { Image } from "@nextui-org/image";
import React from "react";
import Link from "next/link";

import { Product } from "@/graphql/graphql";

export default function ProductCard({ product }: { product: Product }) {
	return (
		<div className="product-card border border-gray-200 flex flex-col gap-2 hover:shadow-md rounded-lg">
			<div className="product-image w-full aspect-square rounded-t-lg overflow-hidden">
				<Link
					className="block w-full aspect-square bg-gray-200"
					href={`/product/${product.slug}`}
				>
					<Image
						alt={product.name}
						className="w-full aspect-square object-cover"
						radius="none"
						src={product.imageGallery[0].url}
					/>
				</Link>
			</div>
			<div className="product-info flex flex-col p-3">
				<Link className="hover:text-primary-500" href={`/product/${product.slug}`}>
					<h3 className="text-sm font-bold line-clamp-2">{product.name}</h3>
				</Link>
				<p className="text-md text-orange-500 font-bold dark:text-gray-400">
					Giá: {product.price} vnđ
				</p>
			</div>
		</div>
	);
}

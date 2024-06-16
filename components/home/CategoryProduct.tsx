"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
// import { Link } from "@nextui-org/link";
import Image from "next/image";

// import { Image } from "@nextui-org/image";
import Link from "next/link";

import { Category, Product } from "@/graphql/graphql";
import { getProductsCategorySlug } from "@/libs/graph/graphCategory";

export default function CategoryProduct({ categoryProduct }: { categoryProduct: Category }) {
	const [products, setProducts] = useState<Product[]>([]);

	const getProducts = async () => {
		const results = await getProductsCategorySlug(categoryProduct.slug);

		console.log(results);

		if (results && results.length > 0) {
			setProducts(results);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="category-product py-12 border-b w-full m-auto flex flex-col gap-4 lg:flex-row lg:gap-12">
			<div className="category-info flex gap-3 lg:w-1/3 flex-col lg:gap-8 justify-start items-start">
				<h3 className="category-name text-xl lg:text-3xl font-bold">
					{categoryProduct.name}
				</h3>
				<Image
					alt={categoryProduct.name || "Title"}
					className="aspect-[8/6] object-cover"
					height={300}
					src={categoryProduct.categoryImage.url}
					width={400}
				/>
				<p className="category-desc">{categoryProduct.description}</p>
				<Button
					as={Link}
					color="primary"
					href={categoryProduct.slug || "/"}
					size="lg"
					variant="ghost"
				>
					Xem thêm
				</Button>
			</div>
			<div className="flex-1">
				{products && products.length > 0 && (
					<div className="grid  grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
						{products.map((product) => (
							<div
								key={product.id}
								className="flex flex-col items-center justify-between  border 
                                border-gray-200 rounded-lg bg-gray-50 shadow-sm w-full 
                                 overflow-hidden hover:shadow-lg  dark:border-gray-800"
							>
								<Link
									className="w-full aspect-square flex"
									href={`/product/${product.slug}`}
								>
									<Image
										alt={product.name || "Image"}
										height={200}
										src={product.imageGallery[0].url}
										className="w-full aspect-square object-cover"
										// radius="none"
										width={200}
									/>
								</Link>
								<div className="flex flex-1 flex-col justify-between w-full min-h-20 items-start justify-center gap-1 p-3">
									<h3 className="text-sm font-bold line-clamp-2">
										{product.name}
									</h3>
									<p className="text-md text-orange-500 font-bold dark:text-gray-400">
										Giá: {product.price} vnđ
									</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

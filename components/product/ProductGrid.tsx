import React from "react";

import ProductCard from "./ProductCard";

import { Product } from "@/graphql/graphql";

export default function ProductGrid({ products }: { products: Product[] }) {
	return (
		<div className="product-grid grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4 lg:gap-6">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

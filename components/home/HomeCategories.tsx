import React from "react";

import CategoryProduct from "./CategoryProduct";

import { Category } from "@/graphql/graphql";

export default function HomeCategories({ categories }: { categories: Category[] }) {
	return (
		<div className="home-categories flex flex-col gap-5">
			<div className="container m-auto flex flex-col ">
				{categories.map((category) => (
					<CategoryProduct key={category.id} categoryProduct={category} />
				))}
			</div>
		</div>
	);
}

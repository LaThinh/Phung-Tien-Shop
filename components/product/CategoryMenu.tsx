import React from "react";
import Link from "next/link";

import { getCategories } from "@/libs/graph/graphCategory";

export default async function CategoryMenu() {
	const categories = await getCategories();

	return (
		<div className="category-menu widget">
			<h3 className="widget-title">Categories</h3>
			<div className="widget-content">
				{categories && categories.length > 0 && (
					<ul className="category-list">
						{categories.map((category, index) => (
							<li key={category.id} className="category-item font-bold ">
								{index > 0 && <hr className="mb-0" />}
								<Link
									className="category-item-link block py-3 px-2 hover:text-green-600"
									href={`/category/${category.slug}`}
									title={category.name}
								>
									{category.name}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

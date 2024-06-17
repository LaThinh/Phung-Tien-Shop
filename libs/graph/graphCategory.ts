import request, { gql } from "graphql-request";

import { graphEndpoint } from "./graphBase";

import { Category, Product } from "@/graphql/graphql";

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "";

export const getCategories = async () => {
	const GET_CATEGORY = gql`
		query GetCategories {
			categories {
				id
				name
				slug
				description
				categoryImage {
					url
					width
					height
				}
			}
		}
	`;

	const { categories }: { categories: Category[] } = await request(graphEndpoint, GET_CATEGORY);

	if (categories) return categories;
};

export const getCategoryInfo = async (slug: string) => {
	const GET_CATEGORY_INFO = gql`
		query getCategoryInfo {
			category(where: { slug: "${slug}" }) {
				id
				name
				categoryBanner {
					fileName
					url
					width
					height
				}
				description
			}
		}
	`;

	const { category }: { category: Category } = await request(graphEndpoint, GET_CATEGORY_INFO);

	if (category) return category;
};

export const getProductsCategorySlug = async (slug: string, limit: number) => {
	const GET_PRODUCTS_IN_CATEGORY_SLUG = gql`
		query GetProducts {
			products(where: { categories_some: { slug: "${slug}" } }, last: ${limit}) {
				id
				name
				price
				slug
				imageGallery {
					id
					url
					width
					height
					fileName
				}
			}
		}
	`;

	const { products }: { products: Product[] } = await request(
		graphEndpoint,
		GET_PRODUCTS_IN_CATEGORY_SLUG
	);

	// console.log(products);

	if (products) return products;
};

export const getProductBySlug = async (slug: string) => {
	const GET_PRODUCTS_BY_SLUG = gql`
		query GetProductBySlug {
			product(where: { slug: "${slug}" }) {
				id
				name
				price
				imageGallery {
					url
					width
					height
					fileName
				}
				description
				categories {
					id
					name
					slug
				}
			}
		}
	`;

	const { product }: { product: Product } = await request(graphEndpoint, GET_PRODUCTS_BY_SLUG);

	// console.log(products);

	if (product) return product;
};

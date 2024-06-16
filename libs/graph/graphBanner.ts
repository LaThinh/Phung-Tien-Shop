import request, { gql } from "graphql-request";

import { graphEndpoint } from "./graphBase";

import { Banner } from "@/graphql/graphql";

export const getBanners = async () => {
	const GET_BANNER = gql`
		query Banners {
			banners {
				id
				title
				description
				link
				image {
					fileName
					height
					size
					url
					width
				}
			}
		}
	`;

	const { banners }: { banners: Banner[] } = await request(graphEndpoint, GET_BANNER);

	if (banners) return banners;
};

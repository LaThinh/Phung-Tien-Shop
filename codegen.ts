import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema:
		process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
		"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxg2kn7v022y07w3v9dhx36n/master",
	documents: ["libs/**/*.{ts,tsx}"],
	generates: {
		"graphql/": {
			preset: "client",
			plugins: [],
		},
	},
};

export default config;

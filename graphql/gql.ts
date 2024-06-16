/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\t\tquery Banners {\n\t\t\tbanners {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tlink\n\t\t\t\timage {\n\t\t\t\t\tfileName\n\t\t\t\t\theight\n\t\t\t\t\tsize\n\t\t\t\t\turl\n\t\t\t\t\twidth\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.BannersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Banners {\n\t\t\tbanners {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tlink\n\t\t\t\timage {\n\t\t\t\t\tfileName\n\t\t\t\t\theight\n\t\t\t\t\tsize\n\t\t\t\t\turl\n\t\t\t\t\twidth\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tquery Banners {\n\t\t\tbanners {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tlink\n\t\t\t\timage {\n\t\t\t\t\tfileName\n\t\t\t\t\theight\n\t\t\t\t\tsize\n\t\t\t\t\turl\n\t\t\t\t\twidth\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
import { gql, type TypedDocumentNode } from "@apollo/client";

export type Product = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  imageUrl: string;
};

export const GET_PRODUCTS: TypedDocumentNode<{ products: Product[] }> = gql`
  query GetProducts {
    products {
      id
      name
      description
      priceCents
      imageUrl
    }
  }
`;

export const GET_PRODUCT: TypedDocumentNode<
  { product: Product | null },
  { id: string }
> = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      priceCents
      imageUrl
    }
  }
`;

export const typeDefs = `
    type Product {
    id: ID!
    name: String!
    description: String!
    priceCents: Int!
    imageUrl: String!
  }

    type Query {
    products: [Product!]!
    product(id: ID!): Product 
  }
`;

import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

const uri = process.env.GRAPHQL_URL;
if (!uri) throw new Error("GRAPHQL_URL is not set");

export const { query } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({ uri }),
    }),
);

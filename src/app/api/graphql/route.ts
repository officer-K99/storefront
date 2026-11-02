import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/server/graphql/typeDefs";
import { resolvers } from "@/server/graphql/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };

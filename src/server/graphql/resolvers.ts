import { prisma } from "@/server/prisma";
import { productIdSchema } from "@/features/products/schemas";
import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    products: () => {
      return prisma.product.findMany({ orderBy: { createdAt: "asc" } });
    },
    product: (_parent: unknown, args: unknown) => {
      const validId = productIdSchema.safeParse(args);
      if (!validId.success) {
        throw new GraphQLError("Invalid product id", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      return prisma.product.findUnique({ where: { id: validId.data.id } });
    },
  },
};

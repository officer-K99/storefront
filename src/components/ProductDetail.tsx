import Image from "next/image";
import { notFound } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { query } from "@/lib/apolloClient";
import { formatPrice } from "@/lib/formatPrice";
import { GET_PRODUCT, type Product } from "@/features/products/graphql/queries";
import { StateMessage } from "@/components/StateMessage";

export async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product: Product | null = null;
  let failed = false;
  try {
    const { data } = await query({ query: GET_PRODUCT, variables: { id } });
    if (data) product = data.product;
    else failed = true;
  } catch {
    failed = true;
  }

  if (failed) {
    return (
      <StateMessage
        icon={TriangleAlert}
        tone="error"
        title="Could not load this product"
        description="Something went wrong on our side. Please try again in a moment."
      />
    );
  }
  if (!product) notFound();

  return (
    <article className="grid max-w-4xl gap-8 md:grid-cols-2">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={600}
        height={400}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[3/2] w-full rounded-xl object-cover"
      />
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold sm:text-3xl">{product.name}</h1>
        <p className="text-zinc-400">{product.description}</p>
        <p className="text-2xl font-semibold">
          {formatPrice(product.priceCents)}
        </p>
      </div>
    </article>
  );
}

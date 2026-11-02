import Image from "next/image";
import Link from "next/link";
import { PackageOpen, TriangleAlert } from "lucide-react";
import { query } from "@/lib/apolloClient";
import { formatPrice } from "@/lib/formatPrice";
import { GET_PRODUCTS } from "@/features/products/graphql/queries";
import { StateMessage } from "@/components/StateMessage";

export async function ProductList() {
  let products = null;
  try {
    const { data } = await query({ query: GET_PRODUCTS });
    products = data?.products ?? null;
  } catch {
    products = null;
  }

  if (!products) {
    return (
      <StateMessage
        icon={TriangleAlert}
        tone="error"
        title="Could not load products"
        description="Something went wrong on our side. Please try again in a moment."
      />
    );
  }
  if (products.length === 0) {
    return (
      <StateMessage
        icon={PackageOpen}
        title="No products yet"
        description="Check back soon, new products are on the way."
      />
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <li key={p.id}>
          <Link
            href={`/products/${p.id}`}
            className="block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition hover:border-zinc-600"
          >
            <Image
              src={p.imageUrl}
              alt={p.name}
              width={600}
              height={400}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="space-y-1 p-4">
              <h2 className="font-medium">{p.name}</h2>
              <p className="text-sm text-zinc-400">{p.description}</p>
              <p className="pt-2 font-semibold">{formatPrice(p.priceCents)}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

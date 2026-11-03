import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PackageOpen, TriangleAlert } from "lucide-react";
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
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <li key={p.id}>
          <Link
            href={`/products/${p.id}`}
            className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/30"
          >
            <div className="overflow-hidden">
              <Image
                src={p.imageUrl}
                alt={p.name}
                width={600}
                height={400}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 p-3 sm:p-4">
              <h3 className="truncate text-sm font-medium sm:text-base">
                {p.name}
              </h3>
              <p className="line-clamp-1 text-xs text-zinc-400 sm:text-sm">
                {p.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold">{formatPrice(p.priceCents)}</p>
                <ArrowUpRight
                  className="size-4 text-zinc-500 transition group-hover:text-indigo-400"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

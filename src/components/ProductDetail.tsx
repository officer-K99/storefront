import Image from "next/image";
import { notFound } from "next/navigation";
import {
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Truck,
  TriangleAlert,
} from "lucide-react";
import { query } from "@/lib/apolloClient";
import { formatPrice } from "@/lib/formatPrice";
import { GET_PRODUCT, type Product } from "@/features/products/graphql/queries";
import { StateMessage } from "@/components/StateMessage";

const perks = [
  { icon: Truck, text: "Free shipping on orders over $50" },
  { icon: RotateCcw, text: "30-day returns, no questions asked" },
  { icon: ShieldCheck, text: "2-year warranty included" },
];

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
    <article className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={400}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[3/2] w-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-3 text-3xl font-semibold">
          {formatPrice(product.priceCents)}
        </p>
        <p className="mt-4 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400"
        >
          <ShoppingCart className="size-5" aria-hidden />
          Add to cart
        </button>

        <ul className="mt-8 space-y-4 border-t border-zinc-800 pt-6">
          {perks.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 text-sm text-zinc-300"
            >
              <Icon className="size-5 shrink-0 text-indigo-400" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

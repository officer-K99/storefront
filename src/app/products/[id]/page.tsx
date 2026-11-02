import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductDetailSkeleton } from "@/components/ProductDetailSkeleton";

export default function ProductPage({ params }: PageProps<"/products/[id]">) {
  return (
    <>
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 transition hover:text-zinc-100"
      >
        <ArrowLeft className="size-4" aria-hidden />
        All products
      </Link>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail params={params} />
      </Suspense>
    </>
  );
}

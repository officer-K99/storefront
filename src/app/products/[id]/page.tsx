import { Suspense } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductDetailSkeleton } from "@/components/ProductDetailSkeleton";

export default function ProductPage({ params }: PageProps<"/products/[id]">) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center gap-1 text-sm text-zinc-400"
      >
        <Link href="/" className="transition hover:text-zinc-100">
          Home
        </Link>
        <ChevronRight className="size-4" aria-hidden />
        <Link href="/#products" className="transition hover:text-zinc-100">
          Products
        </Link>
        <ChevronRight className="size-4" aria-hidden />
        <span className="text-zinc-200">Product</span>
      </nav>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail params={params} />
      </Suspense>
    </>
  );
}

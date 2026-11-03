import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { SortSelect } from "@/components/SortSelect";
import { ProductList } from "@/components/ProductList";
import { ProductListSkeleton } from "@/components/ProductListSkeleton";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="products" className="mt-12 scroll-mt-24">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Products
          </h2>
          <SortSelect />
        </div>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </section>
    </>
  );
}

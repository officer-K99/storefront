import { Suspense } from "react";
import { ProductList } from "@/components/ProductList";
import { ProductListSkeleton } from "@/components/ProductListSkeleton";

export default function Home() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold sm:text-3xl">Products</h1>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
}

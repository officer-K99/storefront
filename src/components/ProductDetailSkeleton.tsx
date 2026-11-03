export function ProductDetailSkeleton() {
  return (
    <div
      className="grid animate-pulse gap-8 md:grid-cols-2 lg:gap-12"
      aria-busy="true"
      aria-label="Loading product"
    >
      <div className="aspect-[3/2] rounded-2xl bg-zinc-800" />
      <div className="space-y-4">
        <div className="h-9 w-3/4 rounded bg-zinc-800" />
        <div className="h-8 w-1/4 rounded bg-zinc-800" />
        <div className="h-4 w-full rounded bg-zinc-800" />
        <div className="h-4 w-2/3 rounded bg-zinc-800" />
        <div className="mt-8 h-12 w-full rounded-xl bg-zinc-800" />
        <div className="space-y-3 pt-6">
          <div className="h-4 w-2/3 rounded bg-zinc-800" />
          <div className="h-4 w-1/2 rounded bg-zinc-800" />
          <div className="h-4 w-3/5 rounded bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

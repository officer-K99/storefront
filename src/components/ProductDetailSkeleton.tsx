export function ProductDetailSkeleton() {
  return (
    <div
      className="grid max-w-4xl animate-pulse gap-8 md:grid-cols-2"
      aria-busy="true"
      aria-label="Loading product"
    >
      <div className="aspect-[3/2] rounded-xl bg-zinc-800" />
      <div className="space-y-4">
        <div className="h-8 w-3/4 rounded bg-zinc-800" />
        <div className="h-4 w-full rounded bg-zinc-800" />
        <div className="h-4 w-2/3 rounded bg-zinc-800" />
        <div className="h-7 w-1/4 rounded bg-zinc-800" />
      </div>
    </div>
  );
}

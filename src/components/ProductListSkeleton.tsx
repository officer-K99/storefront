export function ProductListSkeleton() {
  return (
    <ul
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      aria-busy="true"
      aria-label="Loading products"
    >
      {Array.from({ length: 6 }, (_, i) => (
        <li
          key={i}
          className="animate-pulse overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
        >
          <div className="aspect-[3/2] bg-zinc-800" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-2/3 rounded bg-zinc-800" />
            <div className="h-3 w-full rounded bg-zinc-800" />
            <div className="h-4 w-1/4 rounded bg-zinc-800" />
          </div>
        </li>
      ))}
    </ul>
  );
}

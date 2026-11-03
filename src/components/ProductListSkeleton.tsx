export function ProductListSkeleton() {
  return (
    <ul
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      aria-busy="true"
      aria-label="Loading products"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <li
          key={i}
          className="animate-pulse overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
        >
          <div className="aspect-[4/3] bg-zinc-800" />
          <div className="space-y-2 p-3 sm:p-4">
            <div className="h-4 w-2/3 rounded bg-zinc-800" />
            <div className="h-3 w-full rounded bg-zinc-800" />
            <div className="h-4 w-1/4 rounded bg-zinc-800" />
          </div>
        </li>
      ))}
    </ul>
  );
}

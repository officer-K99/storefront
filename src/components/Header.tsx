import Link from "next/link";
import { ShoppingCart, Store } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-indigo-500/15 text-indigo-400">
            <Store className="size-5" aria-hidden />
          </span>
          Storefront
        </Link>
        <button
          type="button"
          aria-label="Open cart"
          className="grid size-10 place-items-center rounded-lg border border-zinc-800 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
        >
          <ShoppingCart className="size-5" aria-hidden />
        </button>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Store } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Store className="size-6 text-indigo-400" aria-hidden />
          Storefront
        </Link>
      </div>
    </header>
  );
}

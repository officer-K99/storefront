import Link from "next/link";
import { ArrowLeft, PackageX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <PackageX className="size-16 text-zinc-500" aria-hidden />
      <p className="text-sm font-medium text-indigo-400">404</p>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="max-w-md text-zinc-400">
        The page or product you are looking for does not exist or may have been
        removed.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to products
      </Link>
    </div>
  );
}

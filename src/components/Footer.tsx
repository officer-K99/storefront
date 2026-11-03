export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© Storefront. All rights reserved.</p>
        <p>Built with Next.js, GraphQL and Prisma.</p>
      </div>
    </footer>
  );
}

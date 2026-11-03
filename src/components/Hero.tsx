import Link from "next/link";
import {
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const perks = [
  { icon: Truck, title: "Free shipping", text: "On orders over $50" },
  { icon: RotateCcw, title: "30-day returns", text: "No questions asked" },
  { icon: ShieldCheck, title: "2-year warranty", text: "On every product" },
];

export function Hero() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-indigo-500/15 via-zinc-900 to-zinc-950 px-6 py-12 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
            <Sparkles className="size-3.5" aria-hidden />
            New arrivals
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Gear for a better desk setup
          </h1>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Keyboards, mice, audio and storage, picked for people who spend
            their day at a screen.
          </p>
          <Link
            href="#products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            Shop products
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {perks.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Icon className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium">{title}</p>
              <p className="text-sm text-zinc-400">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

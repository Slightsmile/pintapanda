"use client";

import { Panda } from "./Panda";
import { Sparkle } from "./Doodles";

export function Newsletter() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender via-pink to-yellow p-10 text-center shadow-xl sm:p-14">
        <Sparkle className="absolute left-10 top-10 h-6 w-6 text-white/70" />
        <Sparkle className="absolute right-14 bottom-10 h-5 w-5 text-white/60" />
        <Panda
          variant="wave"
          className="mx-auto h-20 w-20 drop-shadow-md sm:h-24 sm:w-24"
        />
        <h2 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Get a Little More Color in Your Inbox
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          Be the first to discover new coloring books, creative ideas,
          special offers, and free printable pages.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border-0 bg-white px-5 py-3.5 text-ink shadow-sm outline-none ring-2 ring-transparent placeholder:text-ink/40 focus:ring-ink/20"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-7 py-3.5 font-bold text-cream shadow-[0_6px_0_0_#241d1a] transition hover:-translate-y-0.5"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

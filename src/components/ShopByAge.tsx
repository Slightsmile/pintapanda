import Link from "next/link";
import { categories } from "@/lib/data";

const colorMap: Record<string, { bg: string; btn: string; blob: string }> = {
  yellow: { bg: "bg-yellow-soft", btn: "bg-yellow text-ink", blob: "#ffd873" },
  pink: { bg: "bg-pink-soft", btn: "bg-pink text-ink", blob: "#ffb6c8" },
  sky: { bg: "bg-sky-soft", btn: "bg-sky text-ink", blob: "#a9ddf3" },
  lavender: { bg: "bg-lavender-soft", btn: "bg-lavender text-ink", blob: "#cdbdf0" },
};

export function ShopByAge() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
          Shop by Age &amp; Style
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Find the perfect fit for every artist
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => {
          const c2 = colorMap[c.color];
          return (
            <div
              key={c.key}
              className={`group relative overflow-hidden rounded-[2rem] ${c2.bg} p-6 transition hover:-translate-y-1.5 hover:shadow-xl`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 opacity-60 transition group-hover:scale-110">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <circle cx="100" cy="100" r="90" fill={c2.blob} opacity="0.5" />
                </svg>
              </div>
              <p className="relative text-xs font-bold uppercase tracking-wide text-ink/50">
                {c.ageRange}
              </p>
              <h3 className="relative mt-2 font-display text-xl font-bold text-ink">
                {c.title}
              </h3>
              <p className="relative mt-2 text-sm text-ink/65">{c.description}</p>
              <Link
                href={`/shop?category=${c.key}`}
                className={`relative mt-5 inline-flex items-center gap-1.5 rounded-full ${c2.btn} px-4 py-2 text-sm font-bold transition group-hover:gap-2.5`}
              >
                Explore <span aria-hidden>→</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

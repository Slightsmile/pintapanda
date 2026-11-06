import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

const bg = ["bg-yellow-soft", "bg-mint-soft", "bg-sky-soft"];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
          Testimonials
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Loved by families and colorists
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-[1.75rem] ${bg[i % bg.length]} p-7`}
          >
            <div className="flex gap-1 text-yellow">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-yellow" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-ink/75">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-sm font-bold text-ink shadow-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink/50">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Panda } from "./Panda";

export function KidsVsAdults() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center gap-5 bg-gradient-to-br from-yellow-soft to-pink-soft px-6 py-16 sm:px-10 md:py-20 lg:px-14">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
            <Image
              src="/Product/2_web.jpg"
              alt="Kids coloring supplies from Pinta Panda"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
            Kids Collection
          </span>
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Big Adventures for Little Artists
          </h2>
          <p className="max-w-md text-ink/70">
            Explore fun worlds filled with animals, fantasy, adventures, and
            imagination.
          </p>
          <Link
            href="/shop?category=kids"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-cream transition hover:-translate-y-0.5"
          >
            Explore Kids Books →
          </Link>
          <Panda variant="crayon" className="absolute right-6 top-6 h-20 w-20 opacity-90 sm:h-24 sm:w-24" />
        </div>

        <div className="relative flex flex-col justify-center gap-5 bg-gradient-to-br from-lavender-soft to-sky-soft px-6 py-16 sm:px-10 md:py-20 lg:px-14">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
            <Image
              src="/Product/4_web.jpg"
              alt="Adult coloring books from Pinta Panda"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-ink/50">
            Adult Collection
          </span>
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Take a Colorful Break
          </h2>
          <p className="max-w-md text-ink/70">
            Slow down, relax, and enjoy the peaceful joy of coloring.
          </p>
          <Link
            href="/shop?category=adult"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink/15 bg-white px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink/30"
          >
            Explore Adult Books →
          </Link>
          <Panda variant="book" className="absolute right-2 top-4 h-24 w-28 opacity-90 sm:h-28 sm:w-32" />
        </div>
      </div>
    </section>
  );
}

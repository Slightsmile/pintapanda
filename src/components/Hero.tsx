import Image from "next/image";
import Link from "next/link";
import { Panda } from "./Panda";
import { Blob, Sparkle, Star } from "./Doodles";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-soft via-cream to-cream">
      <div className="absolute -top-16 -left-16 h-72 w-72 text-yellow opacity-70">
        <Blob className="h-full w-full" fill="#ffd873" />
      </div>
      <div className="absolute top-20 -right-20 h-80 w-80 opacity-60">
        <Blob className="h-full w-full" fill="#a9ddf3" />
      </div>
      <div className="absolute bottom-0 left-1/3 h-56 w-56 opacity-50">
        <Blob className="h-full w-full" fill="#cdbdf0" />
      </div>

      <Sparkle className="absolute left-[8%] top-28 h-6 w-6 text-coral animate-float" />
      <Star className="absolute right-[12%] top-16 h-8 w-8 text-pink animate-float-delay" />
      <Sparkle className="absolute right-[20%] bottom-24 h-5 w-5 text-lavender animate-float-slow" />
      <Star className="absolute left-[18%] bottom-16 h-6 w-6 text-mint animate-float" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-coral shadow-sm">
            🐼 Ready, set, color!
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Bring Your Imagination to Life
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-ink/70 lg:mx-0">
            Discover beautiful coloring books designed for little artists,
            creative minds, and anyone who loves the joy of color.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/shop"
              className="rounded-full bg-coral px-7 py-3.5 text-center font-bold text-white shadow-[0_8px_0_0_#d9663f] transition hover:-translate-y-0.5 hover:shadow-[0_10px_0_0_#d9663f] active:translate-y-0.5 active:shadow-[0_4px_0_0_#d9663f]"
            >
              Explore Coloring Books
            </Link>
            <Link
              href="/shop?category=kids"
              className="rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 text-center font-bold text-ink shadow-[0_6px_0_0_#e8dcc8] transition hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#e8dcc8] active:translate-y-0.5 active:shadow-[0_3px_0_0_#e8dcc8]"
            >
              Shop Kids Collection
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
            <div>
              <p className="font-display text-2xl font-bold text-ink">4.9★</p>
              <p className="text-xs text-ink/50">Average rating</p>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <p className="font-display text-2xl font-bold text-ink">2,500+</p>
              <p className="text-xs text-ink/50">Happy colorists</p>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <p className="font-display text-2xl font-bold text-ink">All Ages</p>
              <p className="text-xs text-ink/50">Kids &amp; adults</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm rotate-2 overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-2xl transition hover:rotate-0">
            <Image
              src="/Product/1_web.jpg"
              alt="Girl Moments coloring book by Pinta Panda"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>

          <div className="absolute -left-6 bottom-10 w-28 rotate-[-8deg] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:w-36 animate-float">
            <Image
              src="/Product/2_web.jpg"
              alt="DOMS watercolor pens included with Pinta Panda coloring book"
              width={300}
              height={400}
              className="aspect-[3/4] object-cover"
            />
          </div>

          <div className="absolute -right-4 top-6 w-24 rotate-[10deg] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:w-32 animate-float-delay">
            <Image
              src="/Product/4_web.jpg"
              alt="Pinta Panda coloring books stacked together"
              width={300}
              height={400}
              className="aspect-[3/4] object-cover"
            />
          </div>

          <Panda
            variant="wave"
            className="absolute -bottom-6 -right-6 h-24 w-24 drop-shadow-lg sm:h-32 sm:w-32"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <svg viewBox="0 0 1200 24" className="h-4 w-full text-ink/15" fill="none">
          <path
            d="M0 12 Q 50 0 100 12 T 200 12 T 300 12 T 400 12 T 500 12 T 600 12 T 700 12 T 800 12 T 900 12 T 1000 12 T 1100 12 T 1200 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}

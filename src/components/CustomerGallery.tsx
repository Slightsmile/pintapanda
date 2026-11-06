import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "./Doodles";

const images = [
  "/Product/1_web.jpg",
  "/Product/2_web.jpg",
  "/Product/3_web.jpg",
  "/Product/4_web.jpg",
  "/Product/1_web.jpg",
  "/Product/3_web.jpg",
];

export function CustomerGallery() {
  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
            Community
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Made Colorful by You
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/60">
            A peek into our colorful community — families, friends, and solo
            colorists sharing their Pinta Panda moments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={src}
                alt="Customer coloring moment"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button className="rounded-full bg-coral px-7 py-3 font-bold text-white shadow-[0_6px_0_0_#d9663f] transition hover:-translate-y-0.5">
            Share Your Creation
          </button>
          <div className="flex items-center gap-4 text-ink/50">
            <a href="#" aria-label="Facebook" className="transition hover:text-coral">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-coral">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

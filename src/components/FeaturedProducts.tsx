import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
            Discover Our Favorites
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Featured Coloring Books
          </h2>
          <p className="mt-3 max-w-xl text-ink/60">
            Animals, adventures, mandalas, and cozy worlds — handpicked
            bestsellers loved by kids and adults alike.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="rounded-full border-2 border-ink/10 bg-white px-8 py-3.5 font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-coral hover:text-coral"
          >
            View All Books
          </Link>
        </div>
      </div>
    </section>
  );
}

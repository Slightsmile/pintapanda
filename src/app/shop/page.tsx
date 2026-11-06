import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { Panda } from "@/components/Panda";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream">
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft to-cream px-5 py-14 md:px-8">
          <Panda
            variant="peek"
            className="absolute -right-6 -top-6 h-28 w-28 opacity-80 sm:h-36 sm:w-36"
          />
          <div className="relative mx-auto max-w-7xl">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
              Shop
            </span>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              All Coloring Books
            </h1>
            <p className="mt-2 max-w-lg text-ink/65">
              Browse our full collection — for little artists, creative kids,
              teens, and adults alike.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                placeholder="Search coloring books..."
                className="w-full rounded-full border border-ink/10 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-coral"
              />
            </div>
            <button className="flex items-center gap-2 self-start rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink/70 sm:self-auto">
              <SlidersHorizontal className="h-4 w-4" />
              Filter &amp; Sort
            </button>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "Little Artists", "Creative Kids", "Teens", "Adult"].map(
              (f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    i === 0
                      ? "bg-ink text-cream"
                      : "bg-white text-ink/60 ring-1 ring-ink/10 hover:ring-coral hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

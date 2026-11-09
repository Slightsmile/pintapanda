import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { BuyNowButton } from "@/components/BuyNowButton";
import { CURRENCY, products } from "@/lib/data";
import { Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm text-ink/50 md:px-8">
          <Link href="/" className="hover:text-coral">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-coral">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink/70">{product.title}</span>
        </div>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:px-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-ink/5">
              <Image
                src={product.gallery[0]}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
              {product.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white shadow">
                  {product.tag}
                </span>
              )}
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-xl bg-white ring-1 ring-ink/5"
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="140px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-coral">
              {product.category} · {product.ageRange}
            </p>
            <h1 className="mt-2 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(product.rating)
                        ? "fill-yellow text-yellow"
                        : "fill-ink/10 text-ink/10"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-ink/50">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-3xl font-extrabold text-ink">
                {CURRENCY}{product.price}
              </span>
              {product.compareAt && (
                <span className="text-lg text-ink/35 line-through">
                  {CURRENCY}{product.compareAt}
                </span>
              )}
            </div>

            <p className="mt-5 text-ink/70">{product.description}</p>

            <div className="mt-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                What&apos;s Included
              </h3>
              <ul className="mt-3 space-y-2">
                {product.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <BuyNowButton slug={product.slug} />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-ink/55">
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                <Truck className="h-5 w-5 text-coral" />
                Fast delivery
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                <RotateCcw className="h-5 w-5 text-coral" />
                Easy returns
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                <ShieldCheck className="h-5 w-5 text-coral" />
                Quality checked
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream-dark py-14">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="font-display text-2xl font-extrabold text-ink">
              You Might Also Like
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

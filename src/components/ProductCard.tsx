"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Plus } from "lucide-react";
import { CURRENCY, Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1.5 hover:shadow-xl">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-cream-dark"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 280px, 45vw"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white shadow">
            {product.tag}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/60 shadow transition hover:text-coral"
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-coral">
          {product.category} · {product.ageRange}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 font-display text-base font-bold text-ink">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.round(product.rating)
                  ? "fill-yellow text-yellow"
                  : "fill-ink/10 text-ink/10"
              }`}
            />
          ))}
          <span className="ml-1 text-xs text-ink/40">({product.reviewCount})</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-extrabold text-ink">
              {CURRENCY}{product.price}
            </span>
            {product.compareAt && (
              <span className="text-sm text-ink/35 line-through">
                {CURRENCY}{product.compareAt}
              </span>
            )}
          </div>
          <button
            aria-label="Quick add to cart"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-ink transition hover:scale-110 hover:bg-mint/80"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

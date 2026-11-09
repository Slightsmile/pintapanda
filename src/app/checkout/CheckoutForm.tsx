"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CURRENCY, Product } from "@/lib/data";
import { trackPixelEvent } from "@/components/MetaPixel";

export function CheckoutForm({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = product.price * quantity;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          address: form.get("address"),
          notes: form.get("notes"),
          productSlug: product.slug,
          productTitle: product.title,
          quantity,
          price: product.price,
          total,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      trackPixelEvent("Purchase", {
        value: total,
        currency: "BDT",
        content_name: product.title,
        content_ids: [product.slug],
        num_items: quantity,
      });

      router.push(`/checkout/success?product=${encodeURIComponent(product.title)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-coral"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-bold text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-coral"
            placeholder="01XXXXXXXXX"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-sm font-bold text-ink">
            Delivery Address
          </label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-coral"
            placeholder="House, road, area, city"
          />
        </div>
        <div>
          <label htmlFor="notes" className="text-sm font-bold text-ink">
            Order Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-coral"
            placeholder="Anything else we should know?"
          />
        </div>

        {error && <p className="text-sm font-bold text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-coral px-6 py-3.5 font-bold text-white shadow-[0_6px_0_0_#d9663f] transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {submitting ? "Placing Order..." : `Place Order — ${CURRENCY}${total}`}
        </button>
      </form>

      <div className="h-fit rounded-[2rem] bg-cream-dark p-6 ring-1 ring-ink/5 sm:p-8">
        <h2 className="font-display text-lg font-bold text-ink">Order Summary</h2>
        <div className="mt-4 flex items-center gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-20 w-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <p className="font-bold text-ink">{product.title}</p>
            <p className="text-sm text-ink/60">Qty: {quantity}</p>
          </div>
          <p className="font-bold text-ink">
            {CURRENCY}
            {product.price * quantity}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 font-display text-lg font-extrabold text-ink">
          <span>Total</span>
          <span>
            {CURRENCY}
            {total}
          </span>
        </div>
        <p className="mt-4 text-xs text-ink/50">Cash on delivery available.</p>
      </div>
    </div>
  );
}

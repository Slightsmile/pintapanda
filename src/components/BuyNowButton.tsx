"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackPixelEvent } from "@/components/MetaPixel";

export function BuyNowButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);

  function handleBuyNow() {
    trackPixelEvent("InitiateCheckout", { content_ids: [slug], num_items: qty });
    router.push(`/checkout?product=${encodeURIComponent(slug)}&qty=${qty}`);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center rounded-full border border-ink/15 bg-white">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-4 py-3 text-lg font-bold text-ink/60 hover:text-ink"
        >
          −
        </button>
        <span className="w-8 text-center font-bold text-ink">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="px-4 py-3 text-lg font-bold text-ink/60 hover:text-ink"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleBuyNow}
        className="flex-1 rounded-full bg-coral px-6 py-3.5 font-bold text-white shadow-[0_6px_0_0_#d9663f] transition hover:-translate-y-0.5"
      >
        Buy Now
      </button>
    </div>
  );
}

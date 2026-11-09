import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export const instant = false;

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream py-20">
        <div className="mx-auto max-w-xl px-5 text-center md:px-8">
          <CheckCircle2 className="mx-auto h-16 w-16 text-coral" />
          <h1 className="mt-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Order Placed!
          </h1>
          <p className="mt-3 text-ink/70">
            Thank you for ordering {product ? <strong>{product}</strong> : "from Pinta Panda"}.
            We&apos;ll contact you shortly to confirm delivery details.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-[0_6px_0_0_#d9663f] transition hover:-translate-y-0.5"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

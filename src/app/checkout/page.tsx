import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/data";
import { CheckoutForm } from "./CheckoutForm";

export const instant = false;

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; qty?: string }>;
}) {
  const { product: slug, qty } = await searchParams;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const quantity = Math.max(1, parseInt(qty ?? "1", 10) || 1);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream py-12">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h1 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Checkout
          </h1>
          <p className="mt-2 text-ink/60">Fill in your details to complete the order.</p>
          <div className="mt-8">
            <CheckoutForm product={product} quantity={quantity} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

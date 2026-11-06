import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShopByAge } from "@/components/ShopByAge";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyPintaPanda } from "@/components/WhyPintaPanda";
import { KidsVsAdults } from "@/components/KidsVsAdults";
import { HowItWorks } from "@/components/HowItWorks";
import { CustomerGallery } from "@/components/CustomerGallery";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ShopByAge />
        <FeaturedProducts />
        <WhyPintaPanda />
        <KidsVsAdults />
        <HowItWorks />
        <CustomerGallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

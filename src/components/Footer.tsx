import Link from "next/link";
import { Panda } from "./Panda";
import { FacebookIcon, InstagramIcon } from "./Doodles";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-cream-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Panda variant="peek" className="h-9 w-9" />
            <span className="font-display text-lg font-bold text-ink">
              Pinta Panda
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink/60">
            Coloring, creativity, and imagination for every age.
          </p>
          <div className="mt-4 flex gap-3 text-ink/50">
            <a href="#" aria-label="Facebook" className="transition hover:text-coral">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-coral">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/65">
            <li><Link href="/shop" className="hover:text-coral">Shop</Link></li>
            <li><Link href="/shop?category=kids" className="hover:text-coral">Kids Collection</Link></li>
            <li><Link href="/shop?category=adult" className="hover:text-coral">Adult Collection</Link></li>
            <li><a href="#about" className="hover:text-coral">About Us</a></li>
            <li><a href="#contact" className="hover:text-coral">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            Customer Support
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/65">
            <li><a href="#" className="hover:text-coral">Shipping &amp; Delivery</a></li>
            <li><a href="#" className="hover:text-coral">Returns</a></li>
            <li><a href="#" className="hover:text-coral">FAQ</a></li>
            <li><a href="#" className="hover:text-coral">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            Visit Us
          </h4>
          <p className="mt-4 text-sm text-ink/65">
            Dhaka, Bangladesh
          </p>
          <p className="mt-2 text-sm text-ink/65">
            hello@pintapanda.shop
          </p>
        </div>
      </div>

      <div className="border-t border-ink/5 px-5 py-5 text-center text-xs text-ink/45 md:px-8">
        © 2026 Pinta Panda. All rights reserved.
      </div>
    </footer>
  );
}

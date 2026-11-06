"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { Panda } from "./Panda";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=kids", label: "Kids Collection" },
  { href: "/shop?category=adult", label: "Adult Collection" },
  { href: "/shop?filter=new", label: "New Arrivals" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Panda variant="peek" className="h-10 w-10" />
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            Pinta Panda
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-ink/70 transition hover:text-coral"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            aria-label="Search"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-pink-soft hover:text-ink"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Wishlist"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-pink-soft hover:text-ink"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-pink-soft hover:text-ink"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-white">
              2
            </span>
          </button>
          <button
            aria-label="Account"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-pink-soft hover:text-ink"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-pink-soft lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 border-t border-ink/5 bg-cream px-5 py-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-ink/80 transition hover:bg-pink-soft hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

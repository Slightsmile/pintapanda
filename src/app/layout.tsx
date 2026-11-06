import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pinta Panda — Coloring Books for Every Age",
  description:
    "Discover beautiful coloring books designed for little artists, creative minds, and anyone who loves the joy of color. Pinta Panda brings imagination to life.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

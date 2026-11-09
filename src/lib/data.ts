export const CURRENCY = "৳";

export type Product = {
  slug: string;
  title: string;
  category: string;
  ageRange: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  whatsIncluded: string[];
  tag?: string;
};

export const products: Product[] = [
  {
    slug: "girl-moments-coloring-book",
    title: "Girl Moments — Cute & Comfy Coloring Book",
    category: "Cozy Coloring",
    ageRange: "Ages 8+",
    price: 270,
    compareAt: 350,
    rating: 5,
    reviewCount: 38,
    image: "/Product/1_web.jpg",
    gallery: ["/Product/1_web.jpg", "/Product/2_web.jpg", "/Product/3_web.jpg", "/Product/4_web.jpg"],
    description:
      "Curl up with Girl Moments, a cute & cozy coloring book filled with warm, detailed scenes of everyday comfort — reading nooks, sleepy pets, house plants and soft afternoon light. Beautifully illustrated and ready to gift.",
    whatsIncluded: [
      "1x Girl Moments coloring book (thick, bleed-resistant paper)",
      "Beautifully illustrated, ready to gift",
    ],
    tag: "Bestseller",
  },
  {
    slug: "doms-sketch-fine-pen-set",
    title: "DOMS Sketch Fine Watercolor Pen Set",
    category: "Coloring Pens",
    ageRange: "All ages",
    price: 120,
    compareAt: 150,
    rating: 4.8,
    reviewCount: 22,
    image: "/Product/2_web.jpg",
    gallery: ["/Product/2_web.jpg"],
    description:
      "A 12-shade DOMS Sketch Fine watercolor pen set with a fine 2mm tip and ventilated caps for safe, long-lasting ink.",
    whatsIncluded: ["1x DOMS Sketch Fine 12-shade watercolor pen set", "Ventilated caps for safe, long-lasting ink"],
  },
  {
    slug: "girl-moments-book-pen-combo",
    title: "Girl Moments Coloring Book + Pen Set Combo",
    category: "Cozy Coloring",
    ageRange: "Ages 8+",
    price: 350,
    compareAt: 500,
    rating: 5,
    reviewCount: 29,
    image: "/Product/3_web.jpg",
    gallery: ["/Product/3_web.jpg"],
    description:
      "The complete Girl Moments bundle — the cozy coloring book paired with a 12-shade DOMS Sketch Fine watercolor pen set. The perfect ready-to-gift coloring bundle for creative minds of any age.",
    whatsIncluded: [
      "1x Girl Moments coloring book (thick, bleed-resistant paper)",
      "1x DOMS Sketch Fine 12-shade watercolor pen set",
      "Ventilated caps for safe, long-lasting ink",
      "Beautifully illustrated, ready to gift",
    ],
    tag: "Best Value",
  },
];

export const categories = [
  {
    key: "little-artists",
    title: "For Little Artists",
    ageRange: "Ages 3–6",
    description: "Simple, bold, and easy-to-color illustrations.",
    color: "yellow",
  },
  {
    key: "creative-kids",
    title: "Creative Kids",
    ageRange: "Ages 7–12",
    description: "Fun characters, animals, adventures, and imaginative scenes.",
    color: "pink",
  },
  {
    key: "teen-young-creators",
    title: "Teen & Young Creators",
    ageRange: "Ages 13–17",
    description: "More detailed and expressive coloring designs.",
    color: "sky",
  },
  {
    key: "adult-coloring",
    title: "Adult Coloring",
    ageRange: "Adult",
    description: "Relaxing patterns, mandalas, nature, and detailed artwork.",
    color: "lavender",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Such beautiful designs! My daughter absolutely loves her Pinta Panda coloring book.",
    name: "Maliha R.",
    role: "Parent",
  },
  {
    quote:
      "I bought one for myself and found coloring surprisingly relaxing. The illustrations are beautiful!",
    name: "Farhan S.",
    role: "Adult colorist",
  },
  {
    quote: "The perfect creative activity for our family.",
    name: "Ayesha K.",
    role: "Parent of two",
  },
];

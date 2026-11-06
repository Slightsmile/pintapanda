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
    slug: "girl-moments-coloring-set",
    title: "Girl Moments — Cute & Comfy Coloring Book + Pen Set",
    category: "Cozy Coloring",
    ageRange: "Ages 8+",
    price: 200,
    compareAt: 260,
    rating: 5,
    reviewCount: 38,
    image: "/Product/1_web.jpg",
    gallery: ["/Product/1_web.jpg", "/Product/2_web.jpg", "/Product/3_web.jpg", "/Product/4_web.jpg"],
    description:
      "Curl up with Girl Moments, a cute & cozy coloring book filled with warm, detailed scenes of everyday comfort — reading nooks, sleepy pets, house plants and soft afternoon light. Paired with a 12-shade DOMS Sketch Fine watercolor pen set with a fine 2mm tip, it's the perfect ready-to-gift coloring bundle for creative minds of any age.",
    whatsIncluded: [
      "1x Girl Moments coloring book (thick, bleed-resistant paper)",
      "1x DOMS Sketch Fine 12-shade watercolor pen set",
      "Ventilated caps for safe, long-lasting ink",
      "Beautifully illustrated, ready to gift",
    ],
    tag: "Bestseller",
  },
  {
    slug: "cute-animals-coloring-book",
    title: "Cute Animals Coloring Book",
    category: "Cute Animals",
    ageRange: "Ages 3–6",
    price: 180,
    rating: 4.8,
    reviewCount: 22,
    image: "/Product/2_web.jpg",
    gallery: ["/Product/2_web.jpg"],
    description:
      "Big, bold, easy-to-color animal friends designed for little hands and growing imaginations.",
    whatsIncluded: ["1x Coloring book", "Thick non-bleed paper"],
  },
  {
    slug: "magical-adventures",
    title: "Magical Adventures Coloring Book",
    category: "Magical Adventures",
    ageRange: "Ages 7–12",
    price: 190,
    rating: 4.9,
    reviewCount: 15,
    image: "/Product/3_web.jpg",
    gallery: ["/Product/3_web.jpg"],
    description:
      "Fantasy worlds, brave heroes and imaginative creatures for young creators to bring to life.",
    whatsIncluded: ["1x Coloring book", "Thick non-bleed paper"],
  },
  {
    slug: "mindful-mandalas",
    title: "Mindful Mandalas Coloring Book",
    category: "Mandalas & Patterns",
    ageRange: "Adult",
    price: 210,
    rating: 5,
    reviewCount: 29,
    image: "/Product/4_web.jpg",
    gallery: ["/Product/4_web.jpg"],
    description:
      "Intricate, relaxing mandala patterns designed for slow, mindful coloring sessions.",
    whatsIncluded: ["1x Coloring book", "Single-sided pages"],
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

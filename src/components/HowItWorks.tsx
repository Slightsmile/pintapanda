const steps = [
  {
    num: "1",
    title: "Choose Your Favorite",
    text: "Browse our collection and find the perfect coloring book.",
    bg: "bg-yellow",
  },
  {
    num: "2",
    title: "Get Creative",
    text: "Grab your favorite colors and bring every page to life.",
    bg: "bg-pink",
  },
  {
    num: "3",
    title: "Enjoy the Moment",
    text: "Relax, create, and share your colorful masterpiece.",
    bg: "bg-mint",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-14 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
          How It Works
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Three simple steps to color-filled joy
        </h2>
      </div>

      <div className="relative grid gap-10 sm:grid-cols-3">
        <svg
          className="pointer-events-none absolute left-0 right-0 top-10 hidden h-4 w-full text-ink/15 sm:block"
          viewBox="0 0 800 20"
          fill="none"
        >
          <path
            d="M0 10 Q200 -10 400 10 T800 10"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="3 10"
            strokeLinecap="round"
          />
        </svg>
        {steps.map((s) => (
          <div key={s.num} className="relative flex flex-col items-center text-center">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full ${s.bg} font-display text-3xl font-extrabold text-ink shadow-md`}
            >
              {s.num}
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2 max-w-xs text-sm text-ink/65">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

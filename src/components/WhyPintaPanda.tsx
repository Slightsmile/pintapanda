const features = [
  {
    emoji: "🎨",
    title: "Spark Creativity",
    text: "Encourage imagination and self-expression through art.",
    bg: "bg-yellow-soft",
  },
  {
    emoji: "🧠",
    title: "Learn & Explore",
    text: "Fun coloring activities that help children develop creativity and focus.",
    bg: "bg-mint-soft",
  },
  {
    emoji: "🧘",
    title: "Relax & Unwind",
    text: "Beautiful designs that help adults enjoy peaceful, mindful creative moments.",
    bg: "bg-lavender-soft",
  },
  {
    emoji: "❤️",
    title: "Made for Every Age",
    text: "From little artists to experienced color lovers, there's something for everyone.",
    bg: "bg-pink-soft",
  },
];

export function WhyPintaPanda() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-coral">
          Why Pinta Panda?
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          More Than Just a Coloring Book
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className={`rounded-[1.75rem] ${f.bg} p-7 text-center transition hover:-translate-y-1.5 hover:shadow-lg`}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
              {f.emoji}
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm text-ink/65">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

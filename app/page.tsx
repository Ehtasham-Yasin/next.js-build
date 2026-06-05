import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "App Router",
    description: "Modern routing with layouts, nested pages, and server components."
  },
  {
    title: "TypeScript",
    description: "Strict typing enabled for safer, easier-to-maintain code."
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling for fast and responsive UI development."
  }
];

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-4 rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-200">
        Complete Next.js Starter
      </p>
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
        Build modern web apps with a clean production-ready foundation.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        This project includes pages, reusable components, API routing, Tailwind styling, and a simple folder structure.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

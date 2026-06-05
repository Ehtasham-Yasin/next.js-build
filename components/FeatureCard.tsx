type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-slate-300">{description}</p>
    </article>
  );
}

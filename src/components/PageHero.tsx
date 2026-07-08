import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-40 pb-20 sm:pt-48 sm:pb-28">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-sand/[0.06] blur-[120px]" />
      <div className="container-wide relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: Props) {
  return (
    <Reveal
      className={`${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-serif text-4xl font-light leading-[1.08] text-white sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

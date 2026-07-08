type PlaceholderProps = {
  label?: string;
  className?: string;
  tone?: string;
};

// Slight per-project variation so the grid doesn't look uniform.
const TONE_STYLES: Record<string, React.CSSProperties> = {
  a: { filter: "hue-rotate(0deg)" },
  b: { filter: "hue-rotate(-6deg) brightness(1.05)" },
  c: { filter: "hue-rotate(8deg) brightness(0.95)" },
  d: { filter: "hue-rotate(-3deg) brightness(1.08)" },
  e: { filter: "hue-rotate(5deg) brightness(0.92)" },
  f: { filter: "hue-rotate(-8deg) brightness(1.02)" },
};

/**
 * Elegant textured placeholder standing in for real renders.
 * Replace by dropping a real image behind it (see /public/README).
 */
export default function Placeholder({
  label,
  className = "",
  tone = "a",
}: PlaceholderProps) {
  return (
    <div
      className={`placeholder-surface flex items-center justify-center ${className}`}
      style={TONE_STYLES[tone] ?? TONE_STYLES.a}
      aria-hidden={label ? undefined : true}
    >
      {label && (
        <span className="relative z-10 select-none px-6 text-center font-serif text-xl font-light tracking-wide text-white/25">
          {label}
        </span>
      )}
    </div>
  );
}

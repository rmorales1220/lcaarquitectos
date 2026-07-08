import Placeholder from "./Placeholder";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group relative cursor-pointer overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Placeholder
          tone={project.tone}
          label={project.title}
          className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        {priority && (
          <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[0.6rem] uppercase tracking-widest2 text-white/70 backdrop-blur-sm">
            Destacado
          </span>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-[0.65rem] uppercase tracking-widest2 text-sand">
            {project.category}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-light text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            {project.location} · {project.year}
          </p>
        </div>
        <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </article>
  );
}

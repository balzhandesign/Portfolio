import Link from "next/link";
import type { CaseStudy } from "@/data/cases";

export default function ProjectCard({
  project,
  index,
}: {
  project: CaseStudy;
  index: number;
  size?: "large" | "normal";
}) {
  return (
    <Link
      href={`/cases/${project.slug}`}
      className="group block py-8 border-b border-border first:border-t hover:pl-4 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-xs text-muted font-light tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-muted text-sm font-light ml-8 md:ml-10 max-w-lg">
            {project.subtitle}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-6 shrink-0 pt-2">
          <span className="text-xs text-muted font-light uppercase tracking-wider">{project.domain}</span>
          <svg
            className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

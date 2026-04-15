"use client";

import Link from "next/link";
import type { CaseStudy } from "@/data/cases";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  index,
}: {
  project: CaseStudy;
  index: number;
  size?: "large" | "normal";
}) {
  return (
    <Reveal delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
      <Link
        href={`/cases/${project.slug}`}
        className="group grid md:grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-8 py-8 border-b border-border hover:pl-3 transition-all duration-300"
      >
        <span className="text-xs text-muted font-light tabular-nums hidden md:block">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-muted text-sm font-light max-w-lg">
            {project.subtitle}
          </p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs text-muted font-light uppercase tracking-wider">{project.domain}</span>
            <span className="text-muted">·</span>
            <span className="text-xs text-muted font-light">{project.role}</span>
          </div>
        </div>

        <svg
          className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 hidden md:block"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </Link>
    </Reveal>
  );
}

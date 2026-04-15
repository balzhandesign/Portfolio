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
  const hasImage = true; // Will use real images when available

  return (
    <Reveal delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
      <Link
        href={`/cases/${project.slug}`}
        className="group block border-b border-border"
      >
        <div className="grid md:grid-cols-[1fr_280px] gap-6 py-8 items-center">
          {/* Text */}
          <div className="flex items-start gap-4 md:gap-8">
            <span className="text-xs text-muted font-light tabular-nums mt-2 hidden md:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-muted text-sm font-light max-w-md">
                {project.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs text-muted font-light uppercase tracking-wider">{project.domain}</span>
                <span className="text-muted">·</span>
                <span className="text-xs text-muted font-light">{project.role}</span>
              </div>
            </div>
          </div>

          {/* Image preview */}
          {hasImage && (
            <div
              className="h-40 rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02] hidden md:flex items-end p-5"
              style={{
                background: `linear-gradient(135deg, ${project.color}12 0%, ${project.color}06 50%, ${project.color}18 100%)`,
                border: `1px solid ${project.color}10`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: project.color + "15" }} />
                <div>
                  <div className="w-16 h-1.5 rounded-full" style={{ backgroundColor: project.color + "20" }} />
                  <div className="w-10 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: project.color + "12" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

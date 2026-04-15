import { cases } from "@/data/cases";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = cases.find((c) => c.slug === slug);
  if (!cs) return { title: "Not found" };
  return {
    title: `${cs.title} — Балжан Болатова`,
    description: cs.subtitle,
  };
}

function SectionBlock({ label, title, items }: { label: string; title: string; items: string[] }) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 py-12 border-t border-border">
      <div>
        <span className="font-light text-muted/30 text-lg">{label}</span>
        <h3 className="font-medium mt-1">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="text-muted font-light leading-relaxed flex gap-4">
            <span className="text-xs text-muted/50 mt-1 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = cases.find((c) => c.slug === slug);
  if (!cs) notFound();

  const idx = cases.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? cases[idx - 1] : null;
  const next = idx < cases.length - 1 ? cases[idx + 1] : null;

  return (
    <article className="pt-28 pb-20">
      {/* Header */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted font-light hover:text-foreground transition-colors mb-16 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Все проекты
          </Link>

          <div className="max-w-3xl mb-12">
            <p className="text-sm text-muted font-light mb-4">{cs.domain} — {cs.role}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{cs.title}</h1>
            <p className="text-lg text-muted font-light leading-relaxed">{cs.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="px-6 mb-16">
        <div
          className="max-w-6xl mx-auto h-64 md:h-96 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${cs.color}10 0%, ${cs.color}05 40%, ${cs.color}15 100%)`,
            border: `1px solid ${cs.color}10`,
          }}
        >
          {/* Decorative UI elements */}
          <div className="flex gap-4 items-end">
            <div className="w-48 h-32 rounded-xl bg-white/60 shadow-sm hidden md:block" />
            <div className="w-32 h-44 rounded-xl bg-white/80 shadow-sm" />
            <div className="w-48 h-36 rounded-xl bg-white/60 shadow-sm hidden md:block" />
          </div>
          <p className="absolute bottom-4 right-6 text-xs text-muted/40 font-light">Скриншоты скоро</p>
        </div>
      </div>

      {/* Meta */}
      <div className="px-6 mb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Роль", value: cs.role },
            { label: "Период", value: cs.timeline },
            { label: "Компания", value: cs.company },
            { label: "Домен", value: cs.domain },
          ].map((m) => (
            <div key={m.label} className="bg-card p-5 rounded-2xl border border-border">
              <span className="text-xs text-muted font-light">{m.label}</span>
              <div className="font-medium mt-1 text-sm">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          {/* Context */}
          <div className="grid md:grid-cols-[200px_1fr] gap-6 py-12 border-t border-border">
            <div>
              <span className="font-light text-muted/30 text-lg">00</span>
              <h3 className="font-medium mt-1">Контекст</h3>
            </div>
            <p className="text-muted font-light leading-relaxed">{cs.sections.context}</p>
          </div>

          <SectionBlock label="01" title="Проблема" items={cs.sections.problem} />
          <SectionBlock label="02" title="Процесс" items={cs.sections.process} />
          <SectionBlock label="03" title="Решение" items={cs.sections.solution} />
          <SectionBlock label="04" title="Результат" items={cs.sections.impact} />
        </div>
      </div>

      {/* Nav */}
      <div className="px-6 mt-20">
        <div className="max-w-6xl mx-auto pt-8 border-t border-border grid md:grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
              <span className="block text-xs text-muted font-light mb-2">Предыдущий</span>
              <span className="font-bold group-hover:text-accent transition-colors">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="group p-6 rounded-2xl bg-dark text-dark-text hover:bg-dark/90 transition-colors text-right">
              <span className="block text-xs font-light opacity-50 mb-2">Следующий</span>
              <span className="font-bold">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}

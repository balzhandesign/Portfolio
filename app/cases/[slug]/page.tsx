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
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-16 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Все проекты
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-muted mb-4">{cs.domain} — {cs.role}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{cs.title}</h1>
          <p className="text-lg text-muted leading-relaxed">{cs.subtitle}</p>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-16">
          {[
            { label: "Роль", value: cs.role },
            { label: "Период", value: cs.timeline },
            { label: "Компания", value: cs.company },
            { label: "Домен", value: cs.domain },
          ].map((m) => (
            <div key={m.label} className="bg-card p-5">
              <span className="text-xs text-muted">{m.label}</span>
              <div className="font-medium mt-1 text-sm">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Context */}
        <div className="grid md:grid-cols-[200px_1fr] gap-6 py-12 border-t border-border">
          <div>
            <span className="text-xs text-muted">00</span>
            <h3 className="font-medium mt-1">Контекст</h3>
          </div>
          <p className="text-muted font-light leading-relaxed">{cs.sections.context}</p>
        </div>

        <SectionBlock label="01" title="Проблема" items={cs.sections.problem} />
        <SectionBlock label="02" title="Процесс" items={cs.sections.process} />
        <SectionBlock label="03" title="Решение" items={cs.sections.solution} />
        <SectionBlock label="04" title="Результат" items={cs.sections.impact} />

        {/* Nav */}
        <div className="mt-20 pt-8 border-t border-border flex justify-between">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="group text-sm text-muted hover:text-foreground transition-colors">
              <span className="block text-xs mb-1">Предыдущий</span>
              <span className="font-medium text-foreground">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="group text-right text-sm text-muted hover:text-foreground transition-colors">
              <span className="block text-xs mb-1">Следующий</span>
              <span className="font-medium text-foreground">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}

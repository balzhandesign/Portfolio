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
    <article className="pt-28">
      {/* ── Header ── */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted font-light hover:text-foreground transition-colors mb-16 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Все проекты
          </Link>

          <p className="text-sm text-muted font-light mb-4">{cs.domain}</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">{cs.title}</h1>
          <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">{cs.subtitle}</p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 pt-8 border-t border-border">
            {[
              { label: "Роль", value: cs.role },
              { label: "Период", value: cs.timeline },
              { label: "Компания", value: cs.company },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-2">
                <span className="text-xs text-muted font-light uppercase tracking-wider">{m.label}</span>
                <span className="text-sm font-medium">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Context ── */}
      <div className="px-6 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted font-light">
            {cs.sections.context}
          </p>
        </div>
      </div>

      {/* ── Problem ── */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-5xl font-bold text-border">01</span>
            <h2 className="text-2xl font-bold">Проблема</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {cs.sections.problem.map((item, i) => (
              <div key={i} className="p-6 bg-card rounded-2xl border border-border">
                <p className="text-sm font-light leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Process ── dark */}
      <div className="px-6 py-20 bg-dark text-dark-text">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-5xl font-bold text-white/10">02</span>
            <h2 className="text-2xl font-bold">Процесс</h2>
          </div>
          <div className="space-y-0">
            {cs.sections.process.map((item, i) => (
              <div key={i} className="flex gap-6 py-5 border-b border-white/10 last:border-0">
                <span className="text-accent font-bold text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-light leading-relaxed text-dark-text/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Solution ── */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-5xl font-bold text-border">03</span>
            <h2 className="text-2xl font-bold">Решение</h2>
          </div>
          <div className="space-y-4">
            {cs.sections.solution.map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <p className="font-light leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Impact ── accent bg */}
      <div className="px-6 py-20 bg-accent-light">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-5xl font-bold text-accent/15">04</span>
            <h2 className="text-2xl font-bold">Результат</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {cs.sections.impact.map((item, i) => (
              <div key={i} className="p-6 bg-card rounded-2xl">
                <p className="text-sm font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nav ── */}
      <div className="px-6 py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="group p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors">
              <span className="block text-xs text-muted font-light mb-2">← Предыдущий</span>
              <span className="font-bold group-hover:text-accent transition-colors">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="group p-6 rounded-2xl bg-dark text-dark-text hover:bg-dark/90 transition-colors md:text-right">
              <span className="block text-xs font-light opacity-50 mb-2">Следующий →</span>
              <span className="font-bold">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}

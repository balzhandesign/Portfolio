"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark text-dark-text">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight">
              <span className="font-bold">Обо</span> <span className="font-light">мне</span>
            </h2>
          </Reveal>

          <div className="space-y-6 font-light leading-relaxed max-w-xl text-dark-text/70">
            <Reveal delay={1}>
              <p>
                <span className="text-dark-text font-medium">Nazarbayev University, Chemical Engineering.</span>{" "}
                Инженерное образование научило системно мыслить — декомпозировать
                проблемы, находить закономерности, строить модели. Это стало
                фундаментом моего подхода к дизайну.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                Я не рисую экраны —{" "}
                <span className="font-bold text-dark-text">я проектирую системы.</span>{" "}
                За 4 года прошла путь от стажёра до product designer.
                Работала с ERP, финтехом, госплатформами, логистикой.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                Сейчас — <span className="text-dark-text font-medium">sole product designer в KMGP.</span>{" "}
                Отвечаю за ERP-экосистему для 5000+ пользователей,
                менторю junior-дизайнера, выстраиваю дизайн-процессы с нуля.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { period: "2016 — 2021", place: "Nazarbayev University", role: "BSc Chemical Engineering" },
            { period: "2022 — 2024", place: "Arcana Agency", role: "Стажёр → Middle UX/UI Designer" },
            { period: "2024 — н.в.", place: "KMGP", role: "Product Designer", current: true },
          ].map((item, i) => (
            <Reveal key={item.period} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className={`p-6 rounded-2xl ${
                "current" in item && item.current
                  ? "bg-accent text-white"
                  : "bg-white/5 border border-white/10"
              }`}>
                <span className={`text-xs font-light ${
                  "current" in item && item.current ? "text-white/60" : "text-dark-text/40"
                }`}>{item.period}</span>
                <h4 className="font-medium text-lg mt-3">{item.place}</h4>
                <p className={`text-sm font-light mt-1 ${
                  "current" in item && item.current ? "text-white/70" : "text-dark-text/50"
                }`}>{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

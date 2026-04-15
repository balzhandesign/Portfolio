export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl leading-tight">
              <span className="font-bold">Обо</span> <span className="font-light">мне</span>
            </h2>
          </div>

          <div className="space-y-6 text-muted font-light leading-relaxed max-w-xl">
            <p>
              <span className="text-foreground font-medium">Nazarbayev University, Chemical Engineering.</span>{" "}
              Инженерное образование научило системно мыслить — декомпозировать
              проблемы, находить закономерности, строить модели. Это стало
              фундаментом моего подхода к дизайну.
            </p>
            <p>
              Я не рисую экраны —{" "}
              <span className="font-bold text-foreground">я проектирую системы.</span>{" "}
              За 4 года прошла путь от стажёра до product designer.
              Работала с ERP, финтехом, госплатформами, логистикой.
            </p>
            <p>
              Сейчас — <span className="text-foreground font-medium">sole product designer в KMGP.</span>{" "}
              Отвечаю за ERP-экосистему для 5000+ пользователей,
              менторю junior-дизайнера, выстраиваю дизайн-процессы с нуля.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { period: "2016 — 2021", place: "Nazarbayev University", role: "BSc Chemical Engineering" },
            { period: "2022 — 2024", place: "Arcana Agency", role: "Стажёр → Middle UX/UI Designer" },
            { period: "2024 — н.в.", place: "KMGP", role: "Product Designer" },
          ].map((item) => (
            <div key={item.period} className="bg-card p-6">
              <span className="text-xs text-muted font-light">{item.period}</span>
              <h4 className="font-medium text-lg mt-3">{item.place}</h4>
              <p className="text-sm text-muted font-light mt-1">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

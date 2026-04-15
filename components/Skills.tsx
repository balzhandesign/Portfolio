import { skills } from "@/data/cases";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl leading-tight">
              <span className="font-bold">Навыки</span> <span className="font-light">&amp; подход</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[...skills.hard, ...skills.soft].map((skill) => (
              <div key={skill.name} className="border-b border-border pb-6">
                <h4 className="font-medium text-base">{skill.name}</h4>
                <p className="text-sm text-muted font-light leading-relaxed mt-1">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-24 grid md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { step: "01", title: "Исследование", desc: "Интервью, аудит, анализ бизнес-логики" },
            { step: "02", title: "Структура", desc: "User Flows, IA, декомпозиция процессов" },
            { step: "03", title: "Дизайн", desc: "Wireframes, прототипы, дизайн-система" },
            { step: "04", title: "Валидация", desc: "Тестирование, итерации, handoff" },
          ].map((item) => (
            <div key={item.step} className="bg-card p-6">
              <span className="text-2xl font-light text-muted/25">{item.step}</span>
              <h4 className="font-medium mt-3 mb-1">{item.title}</h4>
              <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

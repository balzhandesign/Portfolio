export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted font-light tracking-wide mb-12 animate-fade-up">
          Product Designer — Алматы
        </p>

        <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.08] tracking-tight max-w-4xl animate-fade-up animate-delay-100">
          <span className="font-bold">Проектирую</span>
          {" "}
          <span className="font-light">сложные системы</span>
          {" "}
          <span className="font-light">так, чтобы ими было</span>
          {" "}
          <span className="font-bold">просто</span>
          {" "}
          <span className="font-light">пользоваться</span>
        </h1>

        <p className="text-lg font-light text-muted leading-relaxed max-w-xl mt-10 animate-fade-up animate-delay-200">
          ERP, финтех, госуслуги, логистика.
          <br />
          <span className="font-normal text-foreground">Инженерное мышление</span> + продуктовый дизайн.
        </p>

        <div className="flex gap-4 mt-10 animate-fade-up animate-delay-300">
          <a href="#work" className="text-sm font-medium bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent/85 transition-colors">
            Смотреть проекты
          </a>
          <a href="#contact" className="text-sm font-light text-muted border-b border-muted pb-0.5 hover:text-foreground hover:border-foreground transition-colors">
            Написать мне
          </a>
        </div>
      </div>
    </section>
  );
}

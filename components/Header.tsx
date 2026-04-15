"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase">
          Балжан Болатова
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            ["/#work", "Проекты"],
            ["/#about", "Обо мне"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="text-sm text-muted hover:text-foreground transition-colors">
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/85 transition-colors">
            Контакты
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="text-sm text-muted">{menuOpen ? "Закрыть" : "Меню"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-background px-6 pb-8 pt-4 flex flex-col gap-5 border-t border-border">
          {[
            ["/#work", "Проекты"],
            ["/#about", "Обо мне"],
            ["/#contact", "Контакты"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="text-lg" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

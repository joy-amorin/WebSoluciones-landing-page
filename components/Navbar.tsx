'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos',  href: '#portfolio' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-base/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-display font-extrabold text-lg tracking-tight text-white">
          web<em className="not-italic text-emerald-500">soluciones</em>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-5 py-2 rounded-full transition-all hover:-translate-y-[1px]"
        >
          Solicitar mi web
        </a>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-[22px] h-[1.5px] bg-white transition-transform duration-250 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-white transition-opacity duration-250 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-white transition-transform duration-250 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-dark-base flex flex-col items-center justify-center gap-10 z-40">

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-full"
          >
            Solicitar mi web
          </a>

        </div>
      )}
    </header>
  )
}
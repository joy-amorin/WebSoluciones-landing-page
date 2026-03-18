const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos',  href: '#portfolio' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="font-display font-extrabold text-lg tracking-tight block mb-3">
              web<em className="not-italic text-green-500">soluciones</em>
            </a>
            <p className="text-[13px] text-green-100/40 leading-relaxed max-w-[260px]">
              Desarrollo web para emprendimientos que quieren crecer y conseguir más clientes.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-green-100/30 mb-4">Secciones</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[13px] text-green-100/40 hover:text-green-300 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-green-100/30 mb-4">Contacto</p>
            <div className="flex flex-col gap-2.5 mb-5">
              <a href="mailto:hola@websoluciones.com" className="text-[13px] text-green-100/40 hover:text-green-300 transition-colors">
                hola@websoluciones.com
              </a>
              <a href="https://wa.me/59899000000" target="_blank" rel="noopener noreferrer" className="text-[13px] text-green-100/40 hover:text-green-300 transition-colors">
                WhatsApp
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
                },
                {
                  label: 'LinkedIn',
                  href: '#',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 border border-border rounded-lg flex items-center justify-center text-green-100/40 hover:border-green-500 hover:text-green-300 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-green-100/20">© {year} Web Soluciones. Todos los derechos reservados.</p>
          <p className="text-[12px] text-green-100/20">Hecho con Next.js &amp; Tailwind CSS</p>
        </div>

      </div>
    </footer>
  )
}

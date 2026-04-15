const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos',  href: '#portfolio' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#d4d4d4] border-t border-black/10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="font-extrabold text-lg tracking-tight block mb-3 text-[#111]">
              web<em className="not-italic text-emerald-600">soluciones</em>
            </a>
            <p className="text-[13px] text-[#444] leading-relaxed max-w-[260px]">
              Desarrollo de sitios web claros y funcionales para emprendimientos
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#777] mb-4">
              Secciones
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[13px] text-[#555] hover:text-emerald-600 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#777] mb-4">
              Contacto
            </p>

            <div className="flex flex-col gap-2.5 mb-5">
              <a
                href="mailto:contacto.websoluciones@gmail.com"
                className="text-[13px] text-[#555] hover:text-emerald-600 transition-colors"
              >
                contacto.websoluciones@gmail.com
              </a>

              <a
                href="https://wa.me/59895381805"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#555] hover:text-emerald-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/websoluciones_uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-emerald-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-[#777]">
            © {year} Web Soluciones. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}
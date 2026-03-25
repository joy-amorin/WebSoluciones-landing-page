const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos',  href: '#portfolio' },
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
             Desarrollo de sitios web claros y funcionales para emprendimientos
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
                contacto.websoluciones@gmail.com
              </a>
              <a href="https://wa.me/59895381805" target="_blank" rel="noopener noreferrer" className="text-[13px] text-green-100/40 hover:text-green-300 transition-colors">
                WhatsApp
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              <a  href="https://www.instagram.com/joy_amorin_"
              target="_blank"
              rel=" noopener noreferrer"
               className="text-[13px] text-green-100/40 hover:text-green-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            
                  
               
          
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-green-100/20">© {year} Web Soluciones. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  )
}

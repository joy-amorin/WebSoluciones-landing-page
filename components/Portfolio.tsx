const projects = [
  { name: 'Tienda X',          need: 'Necesitaba presencia online',          result: 'Ahora recibe consultas desde su web todos los días', tag: 'E-commerce' },
  { name: 'Consultora YZ',     need: 'Sin imagen profesional online',         result: 'Cerró 3 nuevos clientes en el primer mes',           tag: 'Servicios'  },
  { name: 'Estudio Creativo',  need: 'Solo tenía presencia en Instagram',     result: 'Web con portfolio y formulario de contacto activo',  tag: 'Portfolio'  },
]

const thumbIcons = [
  // Store
  <svg key="0" className="w-14 h-14 stroke-green-500/25" viewBox="0 0 60 60" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="12" y="22" width="36" height="28" rx="3"/><path d="M22 22v-4a8 8 0 0 1 16 0v4"/><circle cx="30" cy="36" r="3"/></svg>,
  // Person
  <svg key="1" className="w-14 h-14 stroke-green-500/25" viewBox="0 0 60 60" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="30" cy="22" r="10"/><path d="M12 50q18-14 36 0"/></svg>,
  // Palette
  <svg key="2" className="w-14 h-14 stroke-green-500/25" viewBox="0 0 60 60" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="30" cy="30" r="18"/><circle cx="22" cy="24" r="3"/><circle cx="38" cy="24" r="3"/><circle cx="22" cy="38" r="3"/><circle cx="38" cy="38" r="3"/></svg>,
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="mb-10">
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Trabajos
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-1">Algunos proyectos</h2>
          <p className="text-sm text-green-100/40">Negocios que ya dieron el paso</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="bg-dark-surface border border-border rounded-2xl overflow-hidden hover:border-green-500/35 hover:-translate-y-1 transition-all duration-250"
            >
              {/* Thumbnail */}
              <div className="h-36 bg-green-500/5 border-b border-border flex items-center justify-center">
                {thumbIcons[i]}
              </div>

              {/* Body */}
              <div className="p-5">
                <span className="inline-block bg-green-500/10 text-green-300 text-[10px] font-medium tracking-widest uppercase px-3 py-[3px] rounded-full mb-3">
                  {p.tag}
                </span>
                <h3 className="text-[15px] font-bold mb-1">{p.name}</h3>
                <p className="text-[13px] text-green-100/40 mb-3">{p.need}</p>
                <p className="text-[13px] text-green-300 flex items-start gap-1.5 leading-snug">
                  <span className="flex-shrink-0">→</span>
                  {p.result}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

const benefits = [
  {
    title: 'Diseño responsive',
    desc:  'Adaptado a celulares, tablets y escritorio. Tu web se ve perfecta en cualquier pantalla.',
    icon: <svg className="w-5 h-5 stroke-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    title: 'Carga rápida',
    desc:  'Nadie espera páginas lentas. Webs optimizadas para máxima velocidad.',
    icon: <svg className="w-5 h-5 stroke-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: 'Formulario de contacto',
    desc:  'Tus clientes te escriben directo desde la web, sin fricciones ni pasos de más.',
    icon: <svg className="w-5 h-5 stroke-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    title: 'Pensada para convertir',
    desc:  'Estructura diseñada para transformar visitas en consultas y ventas reales.',
    icon: <svg className="w-5 h-5 stroke-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    title: 'Imagen profesional',
    desc:  'Dale a tu negocio la presencia que merece y destacate de la competencia.',
    icon: <svg className="w-5 h-5 stroke-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
]

export default function Beneficios() {
  return (
    <section id="servicios" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="mb-12">
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-3">
            Una web que <em className="not-italic text-green-500">trabaja para vos</em>
          </h2>
          <p className="text-base text-green-100/60 max-w-lg leading-relaxed">
            Desarrollo páginas pensadas para mostrar tu negocio de forma clara, profesional
            y enfocada en generar consultas y ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-dark-surface border border-border rounded-xl p-6 hover:border-green-500/35 hover:-translate-y-1 transition-all duration-250 group"
            >
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                {b.icon}
              </div>
              <h3 className="text-sm font-bold mb-2">{b.title}</h3>
              <p className="text-[13px] text-green-100/40 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

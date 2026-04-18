const planes = [
  {
    name: 'Start Web',
    desc: (
      <>
        Tu primera web{' '}
        <span className="font-semibold text-emerald-600">
          profesional
        </span>{' '}
        lista para compartir
      </>
    ),
    price: '100',
    featured: false,
    result:
      'Pasá de no tener presencia online a una web clara, profesional y lista en pocos días.',
    features: [
      'Landing page (1 página)',
      'Diseño responsive (adaptado a móviles)',
      'Secciones clave (Presentación + Servicios + Contacto)',
      'Botón a WhatsApp',
      'Deploy incluido (lista para mostrar)',
    ],
    idealSi: [
      { icon: '🌱', text: 'Estás empezando' },
      { icon: '📱', text: 'Solo tenés Instagram como canal principal' },
      { icon: '💼', text: 'Querés mostrar lo que hacés de forma profesional' },
      { icon: '⚡', text: 'Necesitás algo rápido para tener presencia online' },
    ],
    cierre: {
      normal: 'No necesitás algo complejo.',
      bold: 'Necesitás algo claro, funcional y listo rápido.',
    },
  },
  {
    name: 'Pro Presencia',
    desc: (
      <>
        Para{' '}
        <span className="font-semibold text-emerald-600">
          atraer clientes
        </span>{' '}
        y mostrar tu valor
      </>
    ),
    price: '180 – 220',
    featured: true,
    result:
      'Una web pensada para generar confianza y conseguir clientes.',
    features: [
      '3–5 secciones',
      'Diseño personalizado según tu proyecto',
      'Estructura pensada para mostrar mejor lo que hacés',
      'Formulario de contacto',
      'Integración con redes sociales',
      'SEO básico (para que te encuentren en Google)',
      'Deploy incluido (lista para mostrar)',
    ],
    idealSi: [
      { icon: '📈', text: 'Ya tenés un proyecto en marcha' },
      { icon: '🎯', text: 'Querés mostrar mejor lo que hacés' },
      { icon: '✨', text: 'Necesitás una imagen más profesional' },
      { icon: '🤝', text: 'Buscás generar confianza en quienes te visitan' },
      { icon: '💬', text: 'Querés que tu web te ayude a conseguir clientes' },
    ],
    cierre: {
      normal: 'Tu web deja de ser solo presencia.',
      bold: 'Pasa a ser una herramienta para atraer y convertir clientes.',
    },
  },
]

export default function Planes() {
  return (
    <section id="planes" className="bg-[#d4d4d4] border-y border-black/10 py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-3 text-[#111]">
            Elegí tu plan
          </h2>
          <p className="text-[15px] font-medium text-[#222]">
            Dos formas simples de tener tu web{' '}
            <span className="text-emerald-600 font-semibold">
              profesional
            </span>.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {planes.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl px-7 pt-14 pb-6 flex flex-col transition-all duration-300 group ${
                p.featured
                  ? 'bg-white border border-emerald-500 shadow-md scale-[1.015]'
                  : 'bg-white/60 border border-black hover:-translate-y-1 hover:shadow-sm'
              }`}
            >
              {/* NOMBRE */}
              <div className="absolute -top-5 left-5">
                <div
                  className={`text-xl md:text-2xl font-bold tracking-tight px-5 py-2 rounded-xl shadow-sm transition-all duration-300 ${
                    p.featured
                      ? 'bg-emerald-600 text-white rotate-[-2deg] group-hover:rotate-0'
                      : 'bg-white border border-black text-[#111] rotate-[-2deg] group-hover:rotate-0'
                  }`}
                >
                  {p.name}
                </div>
              </div>

              {/* PRECIO */}
              <div className="absolute -top-8 right-5">
                <div
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 ${
                    p.featured
                      ? 'bg-emerald-600 text-white shadow-sm group-hover:scale-105'
                      : 'bg-white border border-black/10 text-[#111] group-hover:scale-105'
                  }`}
                >
                  <span className="text-lg font-extrabold leading-none">{p.price}</span>
                  <span className="text-[10px] opacity-80 mt-[2px]">USD</span>
                </div>
              </div>

              {/* CONTENIDO */}
              <p className="text-base md:text-lg font-medium text-[#222] mb-5 mt-4 leading-snug">
                {p.desc}
              </p>

              <p className="text-sm text-[#333] mb-5 leading-relaxed">
                {p.result}
              </p>

              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#444]">
                    <span className="flex-shrink-0 w-[15px] h-[15px] rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-2.5 h-2.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`block text-center text-sm font-medium py-2.5 rounded-full transition-all ${
                  p.featured
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-black hover:bg-[#222] text-white'
                }`}
              >
                {p.featured ? 'Quiero este' : 'Empezar'}
              </a>
            </div>
          ))}
        </div>

        {/* GRID BLOQUES IDEAL SI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 items-stretch">
          {planes.map((p) => (
            <div
              key={p.name + '-ideal'}
              className="rounded-2xl border border-black/10 bg-white/50 px-5 py-4 flex flex-col"
              style={{ boxShadow: '-5px 5px 0px rgba(16, 185, 129, 0.18)' }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-4">
                Ideal para vos si…
              </p>

              <ul className="flex flex-col gap-2.5 mb-5 flex-1">
                {p.idealSi.map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5 text-sm text-[#2f2f2f]">
                    <span className="text-sm mt-[2px] opacity-80">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="h-px bg-black/10 mb-4" />

              <p className="text-sm text-[#333]">
                {p.cierre.normal}
                <span className="block font-semibold text-[#111] mt-1">
                  {p.cierre.bold}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 text-center text-xs text-[#555]">
          💳 50% anticipo · ⏱️ Entrega estimada: 7–14 días
        </div>

      </div>
    </section>
  )
}
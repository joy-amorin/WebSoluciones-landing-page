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
      'Diseño responsive',
      'Secciones clave',
      'Botón a WhatsApp',
      'Deploy incluido',
    ],
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
      'Una web pensada para generar confianza y convertir visitas en consultas.',
    features: [
      '3–5 secciones',
      'Diseño personalizado',
      'Formulario de contacto',
      'SEO básico',
      'Estructura estratégica',
    ],
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {planes.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl px-7 pt-14 pb-6 flex flex-col transition-all duration-300 group ${
                p.featured
                  ? 'bg-white border border-emerald-500 shadow-md scale-[1.015]'
                  : 'bg-white/60 border border-black hover:-translate-y-1 hover:shadow-sm'
              }`}
            >

              {/* NOMBRE FLOTANTE */}
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

              {/* CÍRCULO PRECIO */}
              <div className="absolute -top-8 right-5">
                <div
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 ${
                    p.featured
                      ? 'bg-emerald-600 text-white shadow-sm group-hover:scale-105'
                      : 'bg-white border border-black/10 text-[#111] group-hover:scale-105'
                  }`}
                >
                  <span className="text-lg font-extrabold leading-none">
                    {p.price}
                  </span>
                  <span className="text-[10px] opacity-80">USD</span>
                </div>
              </div>

              {/* TITULO */}
              <p className="text-base md:text-lg font-medium text-[#222] mb-5 mt-4 leading-snug">
                {p.desc}
              </p>

              {/* RESULTADO */}
              <p className="text-sm text-[#333] mb-5 leading-relaxed">
                {p.result}
              </p>

              {/* FEATURES */}
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

        {/* FOOTNOTE */}
        <div className="mt-10 text-center text-xs text-[#555]">
          💳 50% anticipo · ⏱️ Entrega estimada: 7–14 días
        </div>

      </div>
    </section>
  )
}
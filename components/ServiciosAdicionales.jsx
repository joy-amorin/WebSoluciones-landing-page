const planes = [
  {
    name: 'Básico',
    desc: (
      <>
        Sin tiempo para publicar en tu feed?{' '}
        <span className="font-semibold text-emerald-600">
          Publicaciones listas
        </span>{' '}
        para usar.
      </>
    ),
    price: '20',
    featured: false,
    result:
      'Contenido simple y listo para mantener tu perfil activo sin esfuerzo.',
    features: ['5 publicaciones (imagen + texto)'],
  },
  {
    name: 'Profesional',
    desc: (
      <>
        Publicar con{' '}
        <span className="font-semibold text-emerald-600">
          constancia
        </span>{' '}
        y mantener tu feed activo.
      </>
    ),
    price: '30',
    featured: true,
    result:
      'Un flujo constante de contenido que mantiene tu marca presente y visible.',
    features: ['10 publicaciones (imagen + texto)'],
  },
  {
    name: 'Avanzado',
    desc: (
      <>
        Contenido suficiente para{' '}
        <span className="font-semibold text-emerald-600">
          varias semanas
        </span>{' '}
        de publicaciones.
      </>
    ),
    price: '40',
    featured: false,
    result:
      'Mayor volumen de contenido para sostener tu presencia sin preocuparte.',
    features: ['15 publicaciones (imagen + texto)'],
  },
]

export default function Planes() {
  return (
    <section id="planes" className="bg-[#d4d4d4] border-y border-black/10 py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-3 text-[#111]">
            Contenido para redes
          </h2>

          <p className="text-[15px] font-medium text-[#222]">
            Publicaciones listas para tu feed:{' '}
            <span className="text-emerald-600 font-semibold">
              imagen + texto incluido
            </span>.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {planes.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl px-6 pt-14 pb-6 flex flex-col transition-all duration-300 group ${
                p.featured
                  ? 'bg-white border-2 border-emerald-500 shadow-md scale-[1.02]'
                  : 'bg-white/60 border-2 border-black hover:-translate-y-1 hover:shadow-sm'
              }`}
            >

              {/* NOMBRE FLOTANTE */}
              <div className="absolute -top-5 left-5">
                <div
                  className={`text-xl md:text-2xl font-bold tracking-tight px-4 py-1.5 rounded-xl shadow-sm transition-all duration-300 ${
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
                  <span className="text-base font-extrabold leading-none">
                    {p.price}
                  </span>
                  <span className="text-[9px] opacity-80">USD</span>
                </div>
              </div>

              {/* TITULO */}
              <p className="text-base font-medium text-[#222] mb-4 mt-4 leading-snug">
                {p.desc}
              </p>

              {/* RESULTADO */}
              <p className="text-sm text-[#333] mb-5 leading-relaxed">
                {p.result}
              </p>

              {/* FEATURES */}
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#444]">
                    <span className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
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
                {p.featured ? 'Elegir plan' : 'Empezar'}
              </a>

            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 text-center text-xs text-[#555]">
          💳 Pago único · Entrega rápida
        </div>

      </div>
    </section>
  )
}
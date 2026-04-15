const planes = [
  {
    badge: "Básico",
    name: "Básico",
    desc: "Sin tiempo para publicar en tu feed? Publicaciones listas para usar.",
    price: "20 USD",
    featured: false,
    features: ["5 publicaciones (imagen + texto)"],
  },
  {
     badge: "Más pedido",
    name: "Profesional",
    desc: "Publicar con constancia y mantener tu feed activo.",
    price: "30 USD",
    featured: true,
    features: ["10 publicaciones (imagen + texto)"],
  },
  {
    badge: "Avanzado",
    name: "Avanzado",
    desc: "Contenido suficiente para varias semanas de publicaciones.",
    price: "40 USD",
    featured: false,
    features: ["15 publicaciones (imagen + texto)"],
  },
]

export default function Planes() {
  return (
    <section id="planes" className="bg-[#d4d4d4] border-y border-black/10 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Paquetes
          </span>

          <h2 className="text-4xl font-extrabold tracking-tighter mb-2 text-[#111]">
            Contenido para redes
          </h2>

          <p className="text-[15px] text-[#333]">
            Publicaciones listas para tu feed: imagen + texto incluido.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {planes.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                p.featured
                  ? 'bg-white/60 border-2 border-emerald-500/40 shadow-md'
                  : 'bg-white/40 border border-emerald-500/70 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-md'
              }`}
            >

              {/* BADGE */}
              <span
                className={`w-fit text-[11px] font-medium px-3 py-[4px] rounded-full mb-4 ${
                  p.featured
                    ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/20'
                    : 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/15'
                }`}
              >
                {p.badge}
              </span>

              {/* TITLE */}
              <h3 className="text-2xl font-extrabold tracking-tighter mb-1 text-[#111]">
                {p.name}
              </h3>

              <p className="text-[13px] text-[#333] mb-4">
                {p.desc}
              </p>

              {/* PRICE */}
              <div className="mb-6">
                <div className={`text-3xl font-extrabold tracking-tight ${
                  p.featured ? 'text-emerald-600' : 'text-[#111]'
                }`}>
                  {p.price}
                </div>
                <div className="text-xs text-[#555]">
                  pago único
                </div>
              </div>

              {/* FEATURES */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#333]">
                    <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
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

              {/* BUTTON */}
              <a
                href="#contacto"
                className={`block text-center text-sm font-medium py-3 rounded-full transition-all ${
                  p.featured
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                   : 'bg-emerald-500 hover:bg-emerald-700 text-white'
                }`}
              >
                Quiero este paquete
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
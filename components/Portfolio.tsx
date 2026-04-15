const projects = [
  {
    name: 'Deco Producciones',
    image: '/portfolio/deco-producciones.png',
    url: 'https://decoproducciones.com',
    desc: 'Stands de comida y bebida para eventos',
  },
  {
    name: 'Kurtco Producciones',
    image: '/portfolio/kurtco-producciones.png',
    url: 'https://kurtcoproducciones.com',
    desc: 'Productora musical enfocada en artistas emergentes',
  },
  {
    name: 'Música, creadora digital',
    image: '/portfolio/joy-amorin.png',
    url: 'https://joyamorin.vercel.app',
    desc: 'Artista',
  },
]
export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#d4d4d4] border-y border-black/10 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Proyectos
          </span>

          <h2 className="text-4xl font-extrabold tracking-tighter mb-2 text-[#111]">
            Algunos trabajos
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >

              <div className="relative">

                {/* SOMBRA IZQUIERDA (extendida hacia abajo) */}
                <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-black/10 blur-[2px]" />

                {/* SOMBRA INFERIOR (tu original, intacta) */}
                <div className="absolute inset-0 translate-y-4 bg-black/10 blur-[2px]" />

                {/* IMAGEN */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

              </div>

              {/* TEXT */}
              <div className="mt-5">

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[16px] font-semibold text-emerald-600">
                    {p.name}
                  </h3>

                  <span className="text-sm text-[#444] group-hover:text-emerald-600 transition-colors">
                    ↗
                  </span>
                </div>

                <p className="text-[13px] text-[#444] leading-snug">
                  {p.desc}
                </p>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  )
}
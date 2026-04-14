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
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="mb-10">
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Proyectos
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-1">
            Algunos proyectos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-dark-surface border border-border rounded-2xl overflow-hidden hover:border-green-500/30 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Screenshot */}
              <div className="h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[15px] font-medium">{p.name}</h3>
                  <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-[13px] text-muted group-hover:border-green-500/40 group-hover:text-green-400 transition-colors">
                    ↗
                  </span>
                </div>
                <p className="text-[13px] text-green-100/40 leading-snug">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
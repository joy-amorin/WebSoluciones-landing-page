const projects = [
  {
    name: 'Deco Producciones',
    image: '/portfolio/deco-producciones.png',
    url: 'https://decoproducciones.com',
    tag: 'Servicio',
    desc: 'Stands de comida y bebida para eventos',
  },
  {
    name: 'Kurtco Producciones',
    image: '/portfolio/kurtco-producciones.png',
    url: 'https://kurtcoproducciones.com',
    tag: 'Servicio',
    desc: 'Productora musical enfocada en artistas emergentes',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="mb-10">
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Prpyectos
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-1">Algunos proyectos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-dark-surface border border-border rounded-2xl overflow-hidden hover:border-green-500/35 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Screenshot */}
              <div className="h-40 overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <span className="inline-block bg-green-500/10 text-green-300 text-[10px] font-medium tracking-widest uppercase px-3 py-[3px] rounded-full mb-3">
                  {p.tag}
                </span>

                <h3 className="text-[15px] font-bold mb-1">{p.name}</h3>

                <p className="text-[13px] text-green-100/40 mb-3">
                  {p.desc}
                </p>

                <span className="text-sm text-green-400">
                  Ver web →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
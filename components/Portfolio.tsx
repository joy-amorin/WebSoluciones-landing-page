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

        {/* 👇 CLAVE: items-stretch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full bg-dark-surface border border-border rounded-2xl overflow-hidden hover:border-green-500/35 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Screenshot */}
              <div className="h-52 overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-[15px] font-bold mb-1">
                  {p.name}
                </h3>

                <p className="text-[13px] text-green-100/40 mb-2">
                  {p.desc}
                </p>

                <span className="text-sm text-green-400 mt-auto">
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
import { projects } from '@/data/projects'

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#ffffff] border-y border-black/10 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-14">
          <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Portfolio
          </span>

          <h2 className="text-4xl font-extrabold tracking-tighter mb-3 text-[#111]">
            Algunos{' '}
        <span className="text-4xl font-extrabold tracking-tighter mb-3 text-emerald-600">
          Proyectos

        </span>{' '}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {/* MOCKUP */}
              <div className="relative max-w-[420px] mx-auto">

                {/* Desktop */}
                <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-1">

                  {/* Browser Bar */}
                  <div className="h-8 border-b border-black/10 bg-[#f5f5f5] flex items-center px-3 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
                  </div>

                  <div className="bg-white p-1">
                    <img
                      src={project.desktopImage}
                      alt={project.name}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="absolute -bottom-4 right-3 w-[75px] md:w-[85px] overflow-hidden rounded-[16px] border-[4px] border-black bg-black shadow-xl transition-all duration-500 group-hover:-translate-y-2">

                  <img
                    src={project.mobileImage}
                    alt={`${project.name} mobile`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="mt-8 text-center">

                {project.category && (
                  <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-600 mb-2">
                    {project.category}
                  </p>
                )}

                <h3 className="text-xl font-semibold text-[#111]">
                  {project.name}
                </h3>

                <span className="inline-flex items-center gap-2 mt-3 text-sm text-[#444] transition-all group-hover:text-emerald-600 group-hover:gap-3">
                  Ver proyecto
                  <span>→</span>
                </span>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
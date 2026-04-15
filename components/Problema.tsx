const benefits = [
  'Organizar toda tu información en un solo lugar',
  'Mostrar tus productos o servicios con más detalle',
  'Explicar cómo trabajás y qué te diferencia',
  'Dar una imagen profesional y confiable',
]

export default function Problema() {
  return (
    <section
      id="problema"
      className="bg-[#d4d4d4] border-y border-black/10 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-5">
              El siguiente paso
            </span>
            <h2 className="text-4xl font-extrabold tracking-tighter mb-2 text-[#111]">
            Organizar y explicar mejor lo que ofrecés
          </h2>

            <p className="text-lg text-[#222] leading-relaxed">
              Instagram es una buena herramienta para mostrar tu trabajo, pero tiene limitaciones.
              No te permite explicar en detalle lo que ofrecés ni organizar tu contenido de forma clara en un solo lugar.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">

            {/* TITLE */}
            <p className="text-base font-semibold text-[#111] mb-3 tracking-tight">
              Una web te permite:
            </p>

            {benefits.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 bg-white/50 border border-emerald-500/60 rounded-xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md"
              >
                <span className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M2 6l2.5 2.5L10 3" />
                  </svg>
                </span>

                <span className="text-[15px] text-[#222] leading-snug">
                  {p}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
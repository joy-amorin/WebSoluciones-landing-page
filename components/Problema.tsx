
const benefits = [
  'Organizar toda tu información en un solo lugar',
  'Mostrar tus productos o servicios con más detalle',
  'Explicar cómo trabajás y qué te diferencia',
  'Dar una imagen profesional y confiable',
]

export default function Problema() {
  return (
    <section id="problema" className="bg-dark-subtle border-y border-border py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="section-label inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
              El siguiente paso
            </span>
            <p className="text-lg text-green-100/60 leading-relaxed mb-5">
              Instagram es una buena herramienta para mostrar tu trabajo, pero tiene limitaciones.
              No te permite explicar en detalle lo que ofrecés ni organizar tu contenido de forma 
              clara en un solo lugar.{' '}
              
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-green-100/40 mb-2">Una web te permite:</p>

            {benefits.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 bg-dark-surface border border-border rounded-xl px-4 py-3 hover:border-green-500/30 transition-colors"
              >
                <span className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 6l2.5 2.5L10 3"/>
                  </svg>
                </span>
                <span className="text-[15px] text-green-100/70 leading-snug">{p}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

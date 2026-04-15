const steps = [
  { num: '01', title: 'Analizamos tu proyecto', desc: 'Hablamos de tu emprendimiento, objetivos y qué necesitás para comenzar.' },
  { num: '02', title: 'Construcción', desc: 'Construimos la base del sitio, adaptando la estructura y el contenido a tu negocio' },
  { num: '03', title: 'Desarrollo', desc: 'Desarrollamos la web con ajustes y revisiones hasta que quede perfecta.' },
  { num: '04', title: 'Online', desc: 'Tu web queda publicada y lista para recibir clientes desde el día 1.' },
]

export default function Proceso() {
  return (
    <section id="proceso" className="bg-[#d4d4d4] border-y border-black/10 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Proceso
          </span>

          <h2 className="text-4xl font-extrabold tracking-tighter text-[#111]">
            Así trabajamos
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col">

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[22px] left-11 right-0 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
              )}

              {/* Number */}
              <div className="relative z-10 w-11 h-11 rounded-full bg-white/50 border border-emerald-500/70 flex items-center justify-center font-bold text-sm text-emerald-700 mb-5">
                {s.num}
              </div>

              {/* Card */}
              <div className="bg-white/40 border border-emerald-500/70 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md">
                <h3 className="text-[15px] font-bold mb-2 text-[#111]">
                  {s.title}
                </h3>

                <p className="text-[13px] text-[#333] leading-relaxed">
                  {s.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-center text-sm text-[#444] italic">
          Proceso simple, rápido y sin complicaciones.
        </p>

      </div>
    </section>
  )
}
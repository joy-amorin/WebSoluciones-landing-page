const steps = [
  { num: '01', title: 'Analizamos tu proyecto',   desc: 'Hablamos de tu emprendimiento, objetivos y qué necesitás para comenzar.' },
  { num: '02', title: 'Construcción',      desc: 'Construimos la base del sitio, adaptando la estructura y el contenido a tu negocio' },
  { num: '03', title: 'Desarrollo',  desc: 'Desarrollamos la web con ajustes y revisiones hasta que quede perfecta.' },
  { num: '04', title: 'Online',      desc: 'Tu web queda publicada y lista para recibir clientes desde el día 1.' },
]

export default function Proceso() {
  return (
    <section id="proceso" className="bg-dark-subtle border-y border-border py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="mb-12">
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Proceso
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter">Así trabajamos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col lg:pr-8">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[22px] left-11 right-0 h-px bg-gradient-to-r from-green-700 to-border" />
              )}

              {/* Number bubble */}
              <div className="relative z-10 w-11 h-11 rounded-full bg-dark-surface border border-green-500 flex items-center justify-center font-display font-bold text-sm text-green-500 mb-5 flex-shrink-0">
                {s.num}
              </div>

              <h3 className="text-[15px] font-bold mb-2">{s.title}</h3>
              <p className="text-[13px] text-green-100/40 leading-relaxed max-w-[180px]">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-green-100/40 italic">
          Proceso simple, rápido y sin complicaciones.
        </p>

      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Glow background */}
      <div className="absolute -top-48 -right-24 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
              Desarrollo web profesional
            </div>

            {/* Heading */}
            <h1 className="text-[42px] md:text-[52px] leading-[1.06] tracking-tighter font-extrabold mb-5">
              Tu emprendimiento ya está en redes, necesitas una web{' '}
              <em className="not-italic text-green-500">para vender mejor</em>
            </h1>

            {/* Subtitle */}
            <p className="text-base text-green-100/60 leading-relaxed mb-8 max-w-[480px]">
              Webs modernas y optimizadas para mostrar lo que hacés de forma profesional y facilitar
              elcontacto con tus clientes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-green-900 font-medium text-[15px] px-8 py-[14px] rounded-full transition-all hover:-translate-y-0.5"
              >
                Solicitar mi web
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-dark-highlight hover:border-green-500/50 hover:bg-green-500/5 text-slate-100 text-[15px] px-8 py-[14px] rounded-full transition-all"
              >
                Ver ejemplos
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6">
              {[
                { num: '+3x',    label: 'más consultas' },
                { num: '100%',   label: 'responsive' },
                { num: '7 días', label: 'entrega rápida' },
              ].map((t, i) => (
                <div key={t.num} className="flex items-center gap-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display font-extrabold text-xl text-green-500">{t.num}</span>
                    <span className="text-xs text-green-100/40">{t.label}</span>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-border" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Browser mockup ── */}
          <div className="hidden lg:block relative animate-fade-up animate-delay-200">
            <div className="bg-dark-surface border border-border rounded-2xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-dark-subtle">
                <span className="w-2 h-2 rounded-full bg-[#E24B4A]" />
                <span className="w-2 h-2 rounded-full bg-[#BA7517]" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <div className="flex-1 ml-2 bg-border rounded h-[18px] flex items-center px-2">
                  <span className="text-[10px] text-green-100/30">tuemprendimiento.com</span>
                </div>
              </div>

              {/* Screen content */}
              <div className="p-4 flex flex-col gap-2">
                <div className="bg-green-500/10 rounded-lg h-20" />
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-green-500/10 rounded-lg h-9" />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-green-500/10 rounded-lg h-24" />
                  <div className="grid grid-cols-2 gap-2 content-start">
                    {[
                      { n: '98',  l: 'Performance' },
                      { n: 'SEO', l: 'Optimizado' },
                      { n: '↑3x', l: 'Consultas', full: true },
                    ].map((s) => (
                      <div
                        key={s.n}
                        className={`bg-green-500/8 border border-green-500/20 rounded-lg p-3 text-center ${s.full ? 'col-span-2' : ''}`}
                      >
                        <div className="font-display font-bold text-lg text-green-500">{s.n}</div>
                        <div className="text-[10px] text-green-100/30 mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 flex items-center gap-2 bg-dark-surface border border-green-500/40 text-green-300 text-xs font-medium px-4 py-2 rounded-full animate-fade-up animate-delay-600 whitespace-nowrap">
              <svg className="w-3.5 h-3.5 stroke-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Web publicada exitosamente
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

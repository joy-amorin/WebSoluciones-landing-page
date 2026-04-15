export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#d4d4d4]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col z-10">

            <h1 className="text-[42px] md:text-[52px] leading-[1.06] tracking-tighter font-extrabold mb-5 text-[#111]">
              Tu emprendimiento ya está en redes, necesitás una web{" "}
              <span className="text-emerald-600">para vender mejor</span>
            </h1>

            <p className="text-base text-[#333] leading-relaxed mb-8 max-w-[480px]">
              Webs modernas y optimizadas para mostrar lo que hacés de forma profesional y facilitar
              el contacto con tus clientes.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[15px] px-8 py-[14px] rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Solicitar mi web
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center justify-center relative -translate-y-10">

            {/* halo */}
            <div className="absolute w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[120px]" />

            {/* IMPORTANTE: ya NO centramos verticalmente el contenido interno */}
            <div className="relative flex flex-col items-start ">

              <h2 className="text-[120px] font-extrabold leading-none tracking-tight text-[#111]">
                WEB
              </h2>

              <h3 className="text-[44px] font-extrabold tracking-[0.2em] text-emerald-600">
                SOLUCIONES
              </h3>

              <p className="mt-6 text-xs tracking-[0.20em] text-[#333] uppercase">
               se ve mejor, se vende más
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
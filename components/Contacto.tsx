'use client'

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-dark-highlight border-y border-green-500/20 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="max-w-xl mx-auto text-center">

          {/* ── Copy ── */}
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Contacto
          </span>

          <h2 className="text-[42px] font-extrabold tracking-tighter leading-[1.05] mb-4">
            ¿Comenzamos tu web?
          </h2>

          <p className="text-[15px] text-green-100/60 leading-relaxed mb-10">
           Describí tu proyecto y respondemos en menos de 24 h.
            <br />
          </p>

          {/* ── Contact options ── */}
          <div className="flex flex-col items-center gap-4">

            {/* Botón */}
            <a
              href="https://wa.me/59899000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-green-900 font-medium text-[15px] py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              Escribir por WhatsApp
            </a>

            {/* Contactos */}
            <div className="flex flex-col gap-3 w-full max-w-sm">

              {/* Item */}
              <a className="flex items-center justify-center gap-3 text-sm text-green-100/60 hover:text-green-300 transition-colors">
                
                <span className="w-8 h-8 min-w-8 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>

                <span className="w-[180px] text-left">
                  +598 99 000 000
                </span>

              </a>

              {/* Email */}
              <a className="flex items-center justify-center gap-3 text-sm text-green-100/60 hover:text-green-300 transition-colors">
                
                <span className="w-8 h-8 min-w-8 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>

                <span className="w-[180px] text-left">
                  hola@tudominio.com
                </span>

              </a>

              {/* Instagram */}
              <a className="flex items-center justify-center gap-3 text-sm text-green-100/60 hover:text-green-300 transition-colors">
                
                <span className="w-8 h-8 min-w-8 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17" cy="7" r="1"/>
                  </svg>
                </span>

                <span className="w-[180px] text-left">
                  @tuusuario
                </span>

              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
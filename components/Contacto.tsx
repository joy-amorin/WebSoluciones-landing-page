'use client'

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-[#d4d4d4] border-y border-black/10 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="max-w-xl mx-auto text-center">

          {/* COPY */}
          <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Contacto
          </span>

          <h2 className="text-[42px] font-extrabold tracking-tighter leading-[1.05] mb-4 text-[#111]">
            ¿Comenzamos tu web?
          </h2>

          <p className="text-[15px] text-[#444] leading-relaxed mb-10">
            Describí tu proyecto y respondemos en menos de 24 hs.
          </p>

          {/* ACCIONES */}
          <div className="flex flex-col items-center gap-5">

            {/* BOTÓN */}
            <a
              href="https://wa.me/598381805"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[15px] py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Escribir por WhatsApp
            </a>

            {/* CONTACTOS */}
            <div className="flex flex-col gap-3 w-full max-w-sm">

              {/* ITEM */}
              <a className="flex items-center justify-center gap-3 text-sm text-[#555] hover:text-emerald-600 transition-colors">
                
                <span className="w-8 h-8 min-w-8 flex items-center justify-center text-emerald-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>

                <span className="w-[180px] text-left">
                  +598 95 381 805
                </span>

              </a>

              {/* EMAIL */}
              <a className="flex items-center justify-center gap-3 text-sm text-[#555] hover:text-emerald-600 transition-colors">
                
                <span className="w-8 h-8 min-w-8 flex items-center justify-center text-emerald-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>

                <span className="w-[180px] text-left">
                  contacto.websoluciones@gmail.com
                </span>

              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/websoluciones_uy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-sm text-[#555] hover:text-emerald-600 transition-colors"
              >
                
                <span className="w-8 h-8 min-w-8 flex items-center justify-center text-emerald-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17" cy="7" r="1"/>
                  </svg>
                </span>

                <span className="w-[180px] text-left">
                  @websoluciones_uy
                </span>

              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
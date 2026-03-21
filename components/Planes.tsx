const planes = [
  {
    badge:  'Plan Inicial',
    name:   'Inicio',
    desc:   'Ideal para dar el primer paso online',
    price:  '80 USD',
    featured: false,
    features: [
                'Landing page (1 sola página)',
                'Presentación clara de tu negocio y servicios',
                'Integración con redes sociales',
                'Diseño adaptable a celular y computadora',
                'Carga rápida',
              ],
  },
  {
    badge:  'Más elegido',
    name:   'Profesional',
    desc:   'Para negocios que quieren crecer',
    price:  '130 USD',
    featured: true,
    features: [
                'Sitio web completo (hasta 4 secciones)',
                'Presentación profesional de tu negocio y servicios',
                'Formulario de contacto directo a tu email',
                'Integración con redes sociales',
                'Diseño adaptable a celular y computadora',
                'Optimización básica para buscadores (SEO)',
              ],
  },

  {
    badge:  'Avanzado',
    name:   'Avanzado',
    desc:   'Para llevar tu presencia online al siguiente nivel',
    price:  '180 USD',
    featured: false,
    features: [
                'Sitio web completo: hasta 5 secciones, incluyendo blog, galería o contenido adicional.',
                'Contacto directo: WhatsApp, Instagram o email.',
                'Reservas y pagos simples:  integración con Calendly, Stripe, PayPal o Mercado Pago',
                'Formulario de contacto directo a tu email',
                'Diseño adaptable a celular y computadora',
                'Optimización mejorada de velocidad y SEO',
              ],
  },
]

export default function Planes() {
  return (
    <section id="planes" className="bg-dark-subtle border-y border-border py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="mb-10">
          <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Planes
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-2">Elegí tu plan</h2>
          <p className="text-[15px] text-green-100/60">Tu web lista para recibir consultas, sin mensualidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl">
          {planes.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col transition-colors ${
                p.featured
                  ? 'bg-dark-highlight border-2 border-green-500'
                  : 'bg-dark-surface border border-border hover:border-green-500/30'
              }`}
            >
              <span className={`w-fit text-[11px] font-medium px-3 py-[4px] rounded-full mb-4 ${
                p.featured
                  ? 'bg-green-500 text-green-900'
                  : 'bg-green-500/10 text-green-300'
              }`}>
                {p.badge}
              </span>

             <h3 className="text-2xl font-extrabold tracking-tighter mb-1">{p.name}</h3>

                  <p className="text-[13px] text-green-100/40 mb-4">{p.desc}</p>

                  {/* 💰 PRECIO */}
                  <div className="mb-6">
                    <div className={`text-3xl font-extrabold tracking-tight ${
                      p.featured ? 'text-green-400' : ''
                    }`}>
                      {p.price}
                    </div>
                    <div className="text-xs text-green-100/40">
                      pago único
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-green-100/60">
                    <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center text-sm font-medium py-3 rounded-full transition-all ${
                  p.featured
                    ? 'bg-green-500 hover:bg-green-600 text-green-900'
                    : 'border border-green-500 text-green-500 hover:bg-green-500/10'
                }`}
              >
                Quiero este plan
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

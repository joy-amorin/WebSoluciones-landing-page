'use client'

import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent]   = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectar con Formspree / EmailJS / tu API route
    setSent(true)
  }

  return (
    <section
      id="contacto"
      className="bg-dark-highlight border-y border-green-500/20 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Copy ── */}
          <div>
            <span className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-300 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
              Contacto
            </span>
            <h2 className="text-[42px] font-extrabold tracking-tighter leading-[1.05] mb-4">
              ¿Listo para tener<br />
              <em className="not-italic text-green-500">tu web?</em>
            </h2>
            <p className="text-[15px] text-green-100/60 leading-relaxed mb-10 max-w-sm">
              Empezá hoy y llevá tu negocio al siguiente nivel.
              Contame sobre tu emprendimiento y te respondo en menos de 24 h.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  href:  'mailto:hola@websoluciones.com',
                  label: 'hola@websoluciones.com',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                },
                {
                  href:  'https://wa.me/59899000000',
                  label: 'WhatsApp',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target={c.href.startsWith('https') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-green-100/60 hover:text-green-300 transition-colors"
                >
                  <span className="w-8 h-8 bg-green-500/10 border border-green-500/25 rounded-lg flex items-center justify-center text-green-500">
                    {c.icon}
                  </span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <div className="bg-dark-surface border border-border rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <svg className="w-7 h-7 stroke-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-sm text-green-100/50">Te respondo en menos de 24 h. ¡Gracias!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id: 'nombre',  label: 'Tu nombre',                    type: 'text',  placeholder: 'Juan García' },
                  { id: 'email',   label: 'Tu email',                     type: 'email', placeholder: 'juan@tuempresa.com' },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={f.id} className="text-[13px] font-medium text-green-100/60">{f.label}</label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={handleChange}
                      required
                      className="bg-dark-base border border-border rounded-lg px-4 py-3 text-sm text-slate-100 placeholder:text-green-100/25 outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-[13px] font-medium text-green-100/60">Contame sobre tu negocio</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Tengo una tienda de ropa y quiero una web para..."
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    className="bg-dark-base border border-border rounded-lg px-4 py-3 text-sm text-slate-100 placeholder:text-green-100/25 outline-none focus:border-green-500 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-green-900 font-medium text-[15px] py-3.5 rounded-full transition-all hover:-translate-y-0.5 w-full"
                >
                  Solicitar mi web
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
